import News from './news/news';
import Sources from './sources/sources';
import { RootObjectArticle, RootObjectSource } from '../../types/index';

export class AppView {
    sources: Sources;
    news: News;
    constructor() {
        this.news = new News();
        this.sources = new Sources();
    }

    drawNews(data: Readonly<RootObjectArticle>) {
        const values = data?.articles ? data?.articles : [];
        this.news.draw(values);
    }

    drawSources(data: Readonly<RootObjectSource>) {
        const values = data?.sources ? data?.sources : [];
        this.sources.draw(values);
    }
}

export default AppView;
