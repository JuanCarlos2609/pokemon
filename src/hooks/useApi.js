/* eslint-disable no-param-reassign */
import _ from "lodash";
import { useEffect, useState } from "react";
import { instance } from "../providers/api";
import { toQueryString } from "../utils/http";
import { useLoader } from "../components/Loader/hooks/useLoader";

const useApi = ({ endpoint, method }) => {
  const [responseData, setResponseData] = useState(null);
  const [responseCode, setResponseCode] = useState(null);
  const [status, setStatus] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const { handleShowLoader } = useLoader();

  useEffect(() => {
    // console.log("ERRORS", error, responseCode);
  }, [responseCode, error]);

  const handleFetch = async ({
    body = {},
    urlParams = null,
    queryString = null,
  } = {}) => {
    let url = `${endpoint}${urlParams ? `/${urlParams}` : ""}`;

    if (_.isObject(queryString)) {
      url = `${url}?${toQueryString(queryString)}`;
    }

    try {
      setLoading(true);
      setError(null);

      const response = await instance[method](url, body);

      const headerResponse = _.get(response, ["data", "headerResponse"]);
      const hasError = _.get(headerResponse, "code", 0) !== 200;

      const code = _.get(headerResponse, "code", 666);
      const errorMessage = _.get(headerResponse, "error", "");
      const message = _.get(headerResponse, "message", "");

      if (hasError) {
        setError({
          code: code,
          name: message,
          message: message,
          errorMessage: errorMessage,
        });
      } else {
        setResponseData(response.data);
        setStatus(code);
        setResponseCode(status);
      }

      return response.data;
    } catch (error) {
      setLoading(false);
      handleShowLoader(false);

      setError({
        code: _.get(error, "response.status"),
        name: _.get(error, "response.statusText"),
        message: _.get(error, "response.data.headerResponse.message", null),
      });

      return _.get(error, "response.data");
    } finally {
      setLoading(false);
      handleShowLoader(false);
    }
  };

  return [handleFetch, responseData, loading, status];
};

export { useApi };
