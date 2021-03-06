export const UPDATE_FILTER_SORT_OPTIONS = "UPDATE_FILTER_SORT_OPTIONS";
export const MARKET_FILTER = "marketFilter";
export const MARKET_SORT = "marketSort";
export const MARKET_MAX_FEES = "maxFee";
export const MARKET_MAX_SPREAD = "maxSpreadPercent";
export const TRANSACTION_PERIOD = "transactionPeriod";
export const EXPERIMENTAL_INVALID = "experimentalInvalid";
export const INSECURE_MARKETS = "hideInsecureMarkets";

export function updateFilterSortOptions(optionKey, optionValue) {
  return {
    type: UPDATE_FILTER_SORT_OPTIONS,
    data: {
      optionKey,
      optionValue
    }
  };
}
