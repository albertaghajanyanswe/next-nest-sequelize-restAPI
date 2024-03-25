'use client'
// todo
import React, { useState, useEffect } from 'react';
import { useDropzone } from 'react-dropzone';
import { FieldValues, Path, useController, useFormContext } from 'react-hook-form';
import { Box, Typography, Tooltip, IconButton, Avatar, Grid } from '@mui/material';
import InputError from '@/assets/form/input-error.svg';
import CleanSvg from '@/assets/form/clean.svg';
import { useSnackbar } from 'notistack';

import { muiStylesWithTheme } from './styles';
import { useTheme } from '@mui/system';
import { TypedPath } from '@/configs/shared/typeUtils';
import { FileData } from '@/configs/shared/types';
import SystemMessage from '@/app/components/systemMessage';
import { getMessage } from '@/configs/shared/helpers/helper';
import CustomButton from '@/app/components/customButton';
import { useTranslation } from 'react-i18next';
import fileService from '@/services/fileService';
import { uploadsAPI } from '@/services/rtk/UploadsApi';
import Image from 'next/image';

const LOADING_GIF = 'https://media.tenor.com/On7kvXhzml4AAAAj/loading-gif.gif';

const FormFileInputMultiple = <T extends FieldValues>({
  name,
  rules,
  label,
  description = '',
  disabled,
  setDisableSave,
  acceptFiles = ['.jpeg', '.jpg', '.png', '.gif'],
  sx = {},
  rootSx = {},
  labelSx = {},
  btnType = 'primary',
  alt = '',
  uploadFile,
  uploadFileLoading,
  deleteFile,
  itemId = null
}: {
  // name: TypedPath<T, FileData[]>;
  name: Path<T>,
  rules?: any;
  title?: string;
  helperTooltip?: string;
  label?: string | React.ReactNode;
  description?: string;
  disabled?: boolean,
  setDisableSave?: (val: boolean) => void;
  acceptFiles?: string[],
  sx?: any;
  rootSx?: any;
  labelSx?: any;
  btnType?: 'secondary' | 'primary' | 'tertiary' | 'ghost';
  alt?: string;
  uploadFile: ({ formData }: any) => any;
  deleteFile: ({ filename }: any) => any;
  uploadFileLoading: boolean;
  itemId?: number | string | string[] | null;
}) => {

  const { t } = useTranslation();
  const theme = useTheme();
  const muiStyles = muiStylesWithTheme(theme);
  const { clearErrors } = useFormContext();

  const { field: { onChange, value }, fieldState: { error } } = useController<T>({ rules, name });
  const { enqueueSnackbar } = useSnackbar();
  const [initialFile, setInitialFile] = useState<string[]>(value as string[] || []);
  const [previewFile, setPreviewFile] = useState(initialFile ? () => {
    if (initialFile.length) {
      return initialFile.map(i => fileService.getFileUrl(i))
    }
    return [];
  } : []);
  const ALLOWED_MAX_SIZE = 10000000; // 10 MB

  // const [uploadAvatar, { isLoading }] = uploadsAPI.useUploadAvatarMutation();
  // const [deleteAvatar] = uploadsAPI.useDeleteAvatarMutation();

  useEffect(() => {
    setInitialFile(value);
    setPreviewFile(value);
  }, [value]);

  const disableSave = (value: boolean) => {
    if (setDisableSave) {
      setDisableSave(value);
    }
  }

  const createFileApi = async (file: File) => {
    const formData = new FormData();
    formData.append('file', file);
    const res = await uploadFile({
      formData,
      // ...(itemId ? {uniqueId: itemId} : {})
    });
    console.log('res = ', res)
    console.log('value = ', value)
    if ('data' in res) {
      clearErrors(name);
      // onChange(res.data.filename, { shouldDirty: true });
      onChange([...(value ? value : []), res.data.name], { shouldDirty: true });
      setInitialFile((prev) => [...(prev ? prev : []), res.data.filename]);
    }
  }

  const onFileUpload = async (file: File) => {
    console.log(11111111)
    if (!file) return;
    console.log(22222222)

    if (file.size > ALLOWED_MAX_SIZE) {
      SystemMessage(enqueueSnackbar, t('fileSizeLimit'), { variant: 'error', theme });
      return;
    }
    console.log(333333333)

    disableSave(true);
    console.log('preview = ', previewFile)
    console.log('initialFile = ', initialFile)
    setPreviewFile((prev) => [...(prev ? prev : []), URL.createObjectURL(file)]);
    try {
      await createFileApi(file);
    } catch (error: any) {
      SystemMessage(enqueueSnackbar, getMessage(t, error, ''), { variant: 'error', theme });
    } finally {
      disableSave(false);
    }
  }

  const dropzoneOptions = {
    useFsAccessApi: false,
    onDrop: (acceptedFiles: any) => {
      return onFileUpload(acceptedFiles[0]);
    },
    accept: {
      'image/jpeg': acceptFiles,
      'image/jpg': acceptFiles,
      'image/png': acceptFiles,
      'image/gif': acceptFiles,
    },
    noClick: true
  };

  const { getRootProps, getInputProps, open } = useDropzone(dropzoneOptions);

  const onDelete = async (item: string) => {
    await deleteFile({ filename: initialFile });
    setPreviewFile((prev) => prev.filter(i => i !== item));
    onChange([...value.filter((i: string) => i !== item)], { shouldDirty: true });

    // onChange([]);
  };

  const attachSVGStyle = btnType === 'primary' ? {} : muiStyles.attachBtnStyle;
  const imagePath = (uuid: string) => uuid ? fileService.getFileUrl(uuid) : '';

  const myLoader = ({ src }: { src: string }) => {
    return fileService.getFileUrl(src);
  }

  return (
    <Box sx={{ ...muiStyles.container, ...sx }} display="flex" flexDirection="column">
      <Box sx={{ ...muiStyles.root, ...rootSx, ...(error && muiStyles.rootError) }}>
        <Box sx={{ display: 'flex', justifyContent: 'space-between', width: '100%', alignItems: { xs: 'center', sm: 'inherit', md: 'inherit', lg: 'inherit' }, flexDirection: { xs: 'column', sm: 'row', md: 'row', lg: 'row' } }}>
          <Box>
            <Box sx={{ display: 'flex', alignItems: 'center', flexDirection: { xs: 'column', sm: 'row', md: 'row', lg: 'row' } }}>
              <Box component="div" sx={{ display: 'flex', flexDirection: 'column', textAlign: { xs: 'center', sm: 'inherit' } }}>
                {label ? typeof label === 'string' ? <Typography sx={{ ...muiStyles.label, ...labelSx }}>{label}</Typography> : label : null}
                {description && <Typography sx={muiStyles.description}>{description}</Typography>}
              </Box>
            </Box>
          </Box>
          <Box sx={{ display: 'flex', alignItems: 'center', margin: { xs: '24px 0', sm: '24px 0', md: '24px 0', lg: '0' } }}>
            <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
              <Box {...(!disabled && getRootProps())} >
                <CustomButton
                  label={t('uploadNewImage')}
                  variant='contained'
                  btnType='primary'
                  size="small"
                  sx={{ ...muiStyles.attachBtn, ...attachSVGStyle }}
                  onClick={open}
                />
                <input {...getInputProps()} multiple name={name} />
              </Box>
            </Box>
          </Box>
        </Box>
        <Grid sx={{ mt: '24px' }} container spacing={3}>
          {initialFile &&
            initialFile.map((i, index) => {
              return (
                <Grid key={index} item xs={6} sm={4} md={3} lg={2}>
                  <IconButton onClick={() => onDelete(i)} sx={{ height: '32px', width: '32px', '& > svg': { '& > path': { stroke: '#004B7F' } } }}>
                    <CleanSvg />
                  </IconButton>
                  <Image
                    loader={myLoader}
                    src={i}
                    alt="Author"
                    layout="responsive"
                    objectFit="contain"
                    width={100}
                    height={120}
                    priority={false}
                    style={{ borderRadius: 4, maxHeight: 120, minHeight: 120 }}
                  />

                </Grid>
              )
            })
          }

        </Grid>
        {Boolean(error?.message) && <Tooltip title={error?.message as string}>
          <Box sx={{ display: 'flex', cursor: 'pointer', ml: 2 }}>
            <InputError />
          </Box>
        </Tooltip>}
      </Box>
    </Box>
  );
}

export default FormFileInputMultiple;