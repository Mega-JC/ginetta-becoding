import base from "@ginetta-becoding/eslint-config/base";

const config = {
  ...base,
  rules: {
    ...base.rules,
    "no-console": "off",
  },
};

export default config;