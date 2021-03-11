import ExternalLink from "./ExternalLink";
import NextLink from "next/link";

interface BandPropsBasic {
  dark?: boolean;
  padless?: boolean;
  cta?:
    | {
        outOfSite?: boolean;
        target: string;
        text: string;
        child?: never;
      }
    | {
        outOfSite?: boolean;
        target: string;
        child: React.ReactNode;
        text?: never;
      };
}

interface BandWithGrid extends BandPropsBasic {
  headline: {
    bold: string;
    thin: string;
  };
  gridless?: never;
  id?: never;
}

interface BandGridless extends BandPropsBasic {
  headline?: never;
  gridless: true;
  id: string;
}

type BandProps = BandWithGrid | BandGridless;

const Band: React.FC<BandProps> = ({
  dark,
  gridless,
  padless,
  id,
  headline,
  cta,
  children,
}) => {
  let bandId: string = "";
  id && (bandId = id);
  headline && (bandId = headline.thin);

  cta && (cta.target = cta.target.replace(/\s+/g, "-").toLowerCase());

  return (
    <section
      id={bandId.replace(/\s+/g, "-").toLowerCase()}
      className={`w-full 
        ${!padless && "py-16"}
        ${
          dark ? "bg-igor-500 text-igor-light" : "bg-igor-light text-igor-500"
        }`}
    >
      <div
        className={` mx-auto ${!padless && "max-w-6xl px-8 md:px-16 "}
            ${!gridless && "md:grid grid-cols-4"}
        `}
      >
        {!gridless ? (
          <>
            <h2 className="mb-12 md:col-span-1 md:pr-6 ">
              <span className="font-bold text-md md:text-7xl md:t-writing-mode-vlr">
                {headline?.bold}
              </span>
              <div
                className={`md:inline-block md:w-12 font-light text-opacity-80 text-md md:text-lg align-top md:break-normal ${
                  dark ? "text-igor-light" : "text-igor-500"
                }`}
              >
                {headline?.thin}
              </div>
            </h2>

            <div className="md:col-span-3">{children}</div>
          </>
        ) : (
          <>{children}</>
        )}
      </div>
      {cta && (
        <div
          className={`flex justify-end w-full text-sm md:text-lg text-right mt-6 pr-8 md:pr-16 text-opacity-70 hover:text-opacity-90 focus-within:text-opacity-90 transition-all ${
            dark ? " text-igor-light" : " text-igor-500"
          }`}
        >
          {cta.outOfSite ? (
            <ExternalLink href={cta.target}>
              {cta.text ? "— " + cta.text : cta.child}
            </ExternalLink>
          ) : (
            <NextLink href={cta.target}>
              {cta.text ? "— " + cta.text : cta.child}
            </NextLink>
          )}
        </div>
      )}
    </section>
  );
};

export default Band;
