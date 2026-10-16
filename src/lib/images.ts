// Images are taken from the supplied ncr-realtor template markup. They are
// reference assets: replace them with licensed images before going live.
const base = "https://framerusercontent.com/images/";
export const img = (id: string, width = 1200) =>
  `${base}${id}.png?width=${width}`;

export const IMG = {
  hero: img("w064dsOBlcqx4PjFDOP5BsoxbE", 1600),
  willow: img("xnp8yEAofhrbjQGwj0GPAQv5ys", 900),
  maple: img("ioqPmCNzHE9SFHOmBH8LXW3lULc", 900),
  pine: img("AkwWK29RVfKWzgy22KpRLp9CiL8", 900),
  about: img("f66Ty7vZvGpNyY8gGcfv7IoiA", 1200),
  aboutSmall: img("WXey5hNI7ufTVTOwWqSWYR7gfA", 500),
  cta: img("oCcej9mzOM9xG7fnGHWJTziPV0", 1200),
  ctaSmall: img("rEfCy2e5ZcllRWkwZZBtjDV0884", 500),
  portraits: [
    img("1BgXrunxODlzxQSxVpMwoficY", 900),
    img("aCPCdfnjoWGY5EqUuWq7mtQFNGE", 900),
    img("psFCp1lurhxsicTOcN6pWM6664", 900),
    img("IFSrHpYsmesNumljBiTqq0bYPo", 900),
  ],
};
