
export class searchPridicate {
    id: string;
    query: string;
    maxResults: null;
    nextPageToken: string;
    type: string;
    relatedToVideoId: string;
    publishedAfter:string;
    publishedBefore:string;
    channelId:string;
    order:string
}

export class response {
    kind: string;
    etag: string;
    nextPageToken: string;
    regionCode: string;
    pageInfo: {};
    items: Array<object>;
    localized? : {};
    country? : '';
}

