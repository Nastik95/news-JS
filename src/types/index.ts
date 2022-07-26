export interface IArticle {
    source: Pick<ISource, 'id' | 'name'>,
    author: string,
    content: string,
    description: string,
    publishedAt: string,
    title: string,
    url: string,
    urlToImage: string,
}

export interface ISource {
    id: string;
    name: string;
    description: string;
    url: string;
    category: string;
    language: string;
    country: string;
}

export interface RootObjectSource {
    status: string;
    sources: ISource[];
}

export interface RootObjectArticle {
    articles: IArticle[];
}

export interface IOptions {}