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

  return (
    // <CardActionArea sx={{ height: '100%' }} onClick={handleOnClick}>
    <Card sx={{ p: 2, height: '100%' }}>
      <Chip sx={{ position: 'absolute', top: '12px', right: '12px', height: '24px', backgroundColor: bgColors[details.intendedFor as keyof typeof bgColors] }} label={t(`${details.intendedFor}`)} />
      <CardMedia
        // sx={{ height: 140 }}
        image='https://m.media-amazon.com/images/I/81YUl0EpOhL._AC_UF350,350_QL80_.jpg'
        sx={{
          backgroundSize: 'contain',
          objectFit: 'cover',
          objectPosition: 'center',
          width: '100%',
          paddingBottom: '50%',
        }}
      />
      <Divider sx={{ ...globalMuiStyles.divider, m: '8px 0' }} />
      <CardContent>
        <Typography sx={{ ...globalMuiStyles.font_18_24_600, textAlign: 'start', color: 'primary.textColor1' }}>
          {details.name}
        </Typography>
        <Typography sx={{ ...globalMuiStyles.font_16_20_600, textAlign: 'start', mt: '12px', color: 'primary.textColor1' }}>
          {details.price} {details.currency}
        </Typography>
        <Box sx={{ mt: 2 }}>
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
    </Card>
    // </CardActionArea>
  );
}

export default ProductItemCard;