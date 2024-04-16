type ButtonProps = {
  children: string;
};

export const Button = ({ children }: ButtonProps) => {
  return (
    <a href="#" className="btn btn-lg main-color text-white">
      {children}
    </a>
  );
};
