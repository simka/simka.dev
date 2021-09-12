import Prismic from "prismic-javascript";

const REPOSITORY = "simka";

export const API_URL = `https://${REPOSITORY}.cdn.prismic.io/api/v2`;
export const API_TOKEN = process.env.NEXT_PUBLIC_PRISMIC_ACCESS_TOKEN;

export const client = Prismic.client(API_URL, { accessToken: API_TOKEN });

export const logEntryPredicate = Prismic.Predicates.at(
  "document.type",
  "log_entry"
);
