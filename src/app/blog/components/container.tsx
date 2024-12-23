type Props = {
  children?: React.ReactNode;
};

const Container = ({ children }: Props) => {
  return <div className="container mx-auto px-1 mt-5">{children}</div>;
};

export default Container;
