import { Injectable } from '@nestjs/common';
import { Op } from 'sequelize';

@Injectable()
export class CollectPayloadService {
  safeJsonParser = (params) => {
    try {
      const { limit, skip: offset, sort, filter, search } = JSON.parse(JSON.stringify(params));
      return { limit, offset, sort, filter, search };
    } catch (err) {
      return { limit: null, offset: null, sort: null, filter: null, search: null };
    }
  };

  collectFilterCondition = (res, name, operator, value) => {
    res.where[name] = { [operator]: value };
  };

  collectCustomFilterItem = (item, customFilter, customFilterNames, filter, filterType) => {
    const filterName = item.split(`_${filterType}`)[0];
    if (!customFilter[filterName]) {
      customFilter[filterName] = {
        [filterType]: filter[item],
        isLiteral: item.indexOf('_literal') !== -1,
      };
    } else {
      customFilter[filterName][filterType] = filter[item];
    }
    if (customFilterNames.indexOf(filterName) === -1) {
      customFilterNames.push(filterName);
    }
  };

  getListPayload(req, addUserId = true) {
    if (req?.query?.params) {

      const params = JSON.parse(decodeURIComponent(req.query.params));
      const res: Record<string, any> = { distinct: true };
      res.where = addUserId ? { userId: req.user.id } : {};

      if (params) {
        const { limit, offset, sort, filter, search } = this.safeJsonParser(params);
        if (limit) {
          res.limit = parseInt(limit);
        }
        if (offset) {
          res.offset = parseInt(offset);
        }
        if (sort && sort.field) {
          res.order = [[sort.field, sort.order]];
        }
        if (filter) {
          const customFilter = {};
          const customFilterNames = [];
          for (const i in filter) {
            if (i.indexOf('_in') !== -1) {
              this.collectCustomFilterItem(i, customFilter, customFilterNames, filter, 'in');
            } else if (i.indexOf('_eq') !== -1) {
              const filterName = i.split('_eq')[0];
              res.where[filterName] = { [Op.eq]: filter[i] };
            } else {
              res.where[i] = { [Op.startsWith]: filter[i] };
            }

            // res.where[i] = { [Op.startsWith]: filter[i] };
          }

          console.log('\n\n 111 customFilterNames = ', customFilterNames)
          for (const i in customFilterNames) {
            const name = customFilterNames[i];
            if (customFilter[name].in) {
              this.collectFilterCondition(res, name, Op.in, customFilter[name].in);
            }
          }
        }
        if (search) {
          let hasSearchInMainTable = false;
          for (const i in search.fields) {
            if (!hasSearchInMainTable) {
              res.where[Op.or] = [];
              hasSearchInMainTable = true;
            }
            const obj = {};
            obj[search.fields[i]] = { [Op.like]: `%${search.value}%` };
            res.where[Op.or].push(obj);
          }
        }
        return res;
      }
    } else {
      return {};
    }
  }
}
