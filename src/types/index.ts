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
    id: string,
    name: string,
}
