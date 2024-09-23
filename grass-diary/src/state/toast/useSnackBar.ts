import { useSnackBarActions } from './SnackBarStore';

export const useSnackBar = () => {
  const { setReset, setActive, setText, setHighlight, setPage, setLinkText } =
    useSnackBarActions();

  const snackBar = (
    text: string,
    highlight?: string,
    linkText?: string,
    page?: string,
  ) => {
    setReset();
    setActive(true);
    setText(text);

    if (highlight) setHighlight(highlight);
    if (linkText) setLinkText(linkText);
    if (page) setPage(page);
  };

  return { snackBar };
};
