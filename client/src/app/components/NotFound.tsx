import { Box, Typography } from "@mui/material"
import { globalMuiStyles } from "../globalMuiStyles"
import { useTheme } from '@mui/material/styles';
import CustomButton from "./customButton";
import { useRouter } from "next/navigation";
import { routes } from "@/configs";

export default function NotFound() {
  const theme = useTheme();
  const router = useRouter();

  const toolbarMinHeight = theme.breakpoints.up('md') ? 64 : 56;

  return (
    <Box sx={{ display: 'flex', justifyContent: 'center', height: `calc(100% - ${toolbarMinHeight}px)`, alignItems: 'center' }}>
      <Box sx={{ width: '92%', height: '90%', backgroundColor: 'primary.btnMainDisabled', padding: '24px 24px 36px 24px', borderRadius: '16px', display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center' }}>
        <Typography sx={{ fontSize: '8rem', lineHeight: '144px', fontWeight: 600, color: 'primary.textColor1' }}>404</Typography>
        <Typography sx={{ ...globalMuiStyles.font_24_32_600, color: 'primary.textColor1' }}>OPPS! PAGE NOT FOUND</Typography>
        <Typography sx={{ ...globalMuiStyles.font_16_20_500, mt: 3, color: 'primary.textColor1' }}>Sorry, the page you are looking for does not exist.</Typography>
        <CustomButton sx={{mt: 8, width: '224px'}} label="Return Home" onClick={() => router.push(routes.home.path)} />
      </Box>
    </Box>
  )
}