
export  class searchPridicate {
    id:string;
    query: string;
    maxResults: null;
    nextPageToken: string;
    type: string;
    relatedToVideoId : string
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

