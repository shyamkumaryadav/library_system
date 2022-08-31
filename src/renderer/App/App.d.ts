type ErrorType = {
  type: 'success' | 'danger' | 'warning' | 'info';
  message: string;
};
export type SetErrors = React.Dispatch<
  React.SetStateAction<ErrorType | undefined>
>;

export default ErrorType;
