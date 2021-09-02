import cx from "classnames";
import NextLink from "next/link";

type Props = {
  children: React.ReactNode;
  href: string;
  className?: string;
};

function Link({ href, children, className, ...rest }: Props) {
  const isInternal = href.startsWith("/");
  const classNames = cx("underline", className);

  if (isInternal) {
    return (
      <NextLink href={href} {...rest}>
        <a className={classNames}>{children}</a>
      </NextLink>
    );
  }

  return (
    <a
      href={href}
      className={classNames}
      rel="noreferrer"
      target="_blank"
      {...rest}
    >
      {children}
    </a>
  );
}

export default Link;
