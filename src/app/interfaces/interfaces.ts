
export  class searchPridicate {
    query: string;
    maxResults: null;
    nextPageToken: string;
    type: string;
}

export interface videos {
    kind: string,
    etag: string,
    nextPageToken: string,
    regionCode: string,
    pageIngo: {
        totalResults: Int32Array,
        resultsPerPage: Int16Array
    },
    items: Array<object>
}

