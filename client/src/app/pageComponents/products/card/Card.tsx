'use client';
import React from "react";
import { Box, useTheme } from "@mui/system";
import { muiStylesWithTheme } from "./styles";
import { Card, CardActions, CardContent, CardMedia, Chip, Divider, IconButton, Typography } from "@mui/material";
import { t } from "i18next";
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import FavoriteIcon from '@mui/icons-material/Favorite';
import { ProductsDataType } from "@/configs/shared/helpers/adapter";
import { useRouter } from "next/navigation";
import { routes } from "@/configs";
import { globalMuiStyles } from "@/app/globalMuiStyles";
import CustomButton from "@/app/components/customButton";
import { useTranslation } from "react-i18next";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import { StaticFiles } from "@/generated/openapi";
import Image from "next/image";
import fileService from "@/services/fileService";

const settings = {
  dots: true,
  infinite: true,
  speed: 500,
  slidesToShow: 1,
  slidesToScroll: 1,
  rows: 1,
  adaptiveHeight: true,
  // centerMode: true,
};

// eslint-disable-next-line @typescript-eslint/no-unused-vars
function ProductItemCard<T>({
  details,
  handleFavorite,
  isFavorite
}: {
  details: ProductsDataType,
  handleFavorite: (e: React.MouseEvent<HTMLElement>, details: ProductsDataType) => Promise<void>,
  isFavorite: boolean
}) {
  const { t } = useTranslation();
  const theme = useTheme();
  const router = useRouter();
  const muiStyles = muiStylesWithTheme(theme);

  const handleOnClick = () => {
    router.push(routes.productEdit.path.replace(':id', details.id as unknown as string))
  }

  const bgColors = {
    FOR_SALE: 'primary.borderColor2',
    FOR_RENT: 'primary.orange2',
    FOR_FREE_GIVING: 'primary.green2'
  }

  const images = (details?.staticFiles as any)?.map((i: StaticFiles) => i.name);

  const myLoader = ({ src }: { src: string }) => {
    return fileService.getFileUrl(src);
  }

  const image = (imgLink: string) => {
    return (
      <Image
        key={imgLink}
        loader={myLoader}
        src={imgLink}
        alt="img"
        // layout="fill"
        objectFit="contain"
        width={240}
        height={240}
        priority={false}
        style={{ borderTopLeftRadius: 4, borderTopRightRadius: 4 }}
      />
    )
  }
  return (
    // <CardActionArea sx={{ height: '100%' }} onClick={handleOnClick}>
    <Card sx={{ height: '100%', display: 'flex', flexDirection: 'column', justifyContent: 'space-between', position: 'relative' }}>
      <Chip sx={{ zIndex: 1000, position: 'absolute', top: '12px', right: '12px', height: '24px', backgroundColor: bgColors[details.intendedFor as keyof typeof bgColors] }} label={t(`${details.intendedFor}`)} />
      <Box
        component={Slider}
        {...settings}
      // sx={{
      //   '& > .slick-list': {
      //     maxHeight: { xs: '250px', sm: '186px', md: '186px' },
      //     '& > .slick-track': {
      //       '& > div': {
      //         // mt: 5,
      //         '& > img': { maxHeight: { xs: '250px', sm: '186px', md: '186px', lg: '186px' } }
      //       }
      //     }
      //   }
      // }}
      >
        {images.map((i: string) => image(i))}
      </Box>
      <CardContent sx={{ mt: 2 }}>
        <Typography sx={{ ...globalMuiStyles.font_16_20_600, textAlign: 'start', color: 'primary.textColor1' }}>
          {details.name}
        </Typography>
        <Typography sx={{ ...globalMuiStyles.font_16_20_500, textAlign: 'start', mt: '4px', color: 'primary.textColor1' }}>
          {details.price} {details.currency}
        </Typography>
        <Box sx={{ mt: 1 }}>
          <Typography sx={{ ...globalMuiStyles.font_14_16_400, textAlign: 'start', color: 'primary.textColor1' }}>
            {details.province} {details.city} {details.address}
          </Typography>
          <Typography sx={{ ...globalMuiStyles.font_14_16_400, textAlign: 'start', mt: 1, color: 'primary.textColor3' }}>
            {details.description}
          </Typography>
        </Box>
      </CardContent>
      <CardActions>
        <IconButton onClick={(e) => handleFavorite(e, details)} sx={muiStyles.favoriteSVG}>
          {isFavorite ? <FavoriteIcon /> : <FavoriteBorderIcon />}
        </IconButton>
        <CustomButton
          label={t('view')}
          onClick={handleOnClick}
          variant='outlined'
          btnType='tertiary'
          size='small'
        />
        {/* Actions todo */}
      </CardActions>
    </Card >
    // </CardActionArea>
  );
}

export default ProductItemCard;