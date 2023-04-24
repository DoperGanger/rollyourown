import { useGameConfig } from "@/hooks/config";
import { Icon, IconProps } from "..";

export const Speed = (props: IconProps) => {
  const { nsfw } = useGameConfig();
  if (nsfw) {
    return <></>;
  }

  return (
    <Icon viewBox="0 0 60 60" height="60px" width="60px" {...props}>
      <path d="M6.8426 23.3549H11.13V24.7829H8.27397V26.2109H6.84596L6.84268 27.6422H8.27068V26.2142H11.1267V24.7862H12.5547V23.3582H11.1267V21.9302H15.4141V20.5022L23.9853 20.4989V21.9269H28.2726V23.3549H29.7006V24.7829H31.1286V26.2109H28.2726V27.6422H26.8446V29.0702H25.4166V30.4982H26.8446V29.0702H28.2726V27.6422H31.1286V26.2142H38.3574V27.6422H41.2134V24.7862H39.7854V20.4988H41.2134V21.9268H42.6414V24.7828H44.0694V20.4954H45.4974V21.9234H46.9254V24.7794H48.3534V26.2074H49.7814L49.788 27.642H51.216V30.498H49.788V31.926H48.36V33.354H51.216V34.782H54.072V36.21H55.5V37.638H51.2126V36.21H48.3566V34.782H46.9286V36.21H48.3566V37.638H51.2126V39.066H54.0686V40.494H55.4966L55.4999 41.9286H51.2126V40.5006H48.3565V39.0726H42.6412V37.6446L38.3571 37.6413V36.2133H28.358V37.6413H19.7868V39.0693H16.9308V40.4973H12.6435V39.0693H14.0715V37.6413H16.9275V36.2133H18.3555V34.7853H19.7835V33.3573H21.2115V31.9293H22.6395V30.5013H24.0675L24.0708 27.642H18.3554V29.07H15.4994V27.642H16.9274V26.214H19.7834V24.786H16.9274V26.214H15.4994V27.642H11.212V29.07H15.4994V30.498H14.0714V31.926H8.35601V30.498H6.928V29.07H5.5V24.7826H6.928V23.3546L6.8426 23.3549ZM46.9287 29.0703V27.6423H45.5007V29.0703H46.9287ZM46.9287 31.9295H44.0727V30.5015H41.2167V29.0735H39.7887V30.5015H41.2167V31.9295H44.0727V33.3576H46.9287V31.9295ZM22.6429 23.355V24.783H25.4989V26.211H26.9269V24.783H25.4989V23.355H22.6429V21.927H18.3555V23.355H22.6429ZM38.3575 20.499L39.7854 20.4988L39.7855 19.071H38.3575V20.499ZM42.6449 20.499H44.0729V19.071H42.6449V20.499Z" />
    </Icon>
  );
};
