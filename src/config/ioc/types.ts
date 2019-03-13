import AuthTypes from "./types/auth";
import BoTypes from "./types/business";
import FacadeTypes from "./types/facades";
import HelperTypes from "./types/helpers";
import ServiceTypes from "./types/services";
import MiddlewareTypes from "./types/middlewares";

const types = {
  ...AuthTypes,
  ...BoTypes,
  ...FacadeTypes,
  ...HelperTypes,
  ...ServiceTypes,
  ...MiddlewareTypes
};

export default types;
