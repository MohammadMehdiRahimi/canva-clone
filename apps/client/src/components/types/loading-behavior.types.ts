export type LoaderVariant = 'spinner' | 'ring';
export type LoadingBehavior = {
  isLoading?: boolean;
  loadingText?: string;
  loaderVariant?: LoaderVariant;
};
