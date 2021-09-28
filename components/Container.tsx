type ContainerProps =
  | {
      backable?: boolean;
      backMessage?: never;
      backAnchor?: never;
    }
  | {
      backable: true;
      backMessage?: string;
      backAnchor?: string;
    };

const Container: React.FC<ContainerProps> = ({
  backable,
  backMessage,
  backAnchor,
  children,
}) => {
  const childrenArray: any[] = Children.toArray(children);
  let dark: boolean | undefined;
  if (childrenArray.length > 0) {
    dark = childrenArray[childrenArray.length - 1].props.dark;
  }

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
      className="relative min-h-screen bg-sand-1"
    >
      {!backable ? (
        <MainNav />
      ) : (
        <MainNav
          backable={backable}
          backMessage={backMessage}
          backAnchor={backAnchor}
        />
      )}
      <div className="relative -mt-2 bg-sand-1 min-h-30vh rounded-tl-2xl w-full">
        <main className="flex flex-col justify-center">{children}</main>
        <Footer dark={dark} />
      </div>
    </motion.div>
  );
};

export default Container;

import { Children } from "react";

import MainNav from "@/components/MainNav";
import Footer from "@/components/Footer";
import { motion } from "framer-motion";
