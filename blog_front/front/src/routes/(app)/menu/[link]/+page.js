import axios from 'axios';
import cheerio from "cheerio";
import { back_api,category_list } from '$lib/const';
import moment from "moment-timezone";

export const prerender = false;

export const load = async ({ params, fetch, url }) => {

    const { link } = params
    let posts = [];

    try {

        const res = await axios.post(`${back_api}/main/menu`, {
            link
        })
        posts = res.data.posts;

        for (let i = 0; i < posts.length; i++) {
            // 날짜
            const date = new Date(posts[i].bo_created_at);
            const dateStr = moment.tz(date, 'Asia/Seoul');
            posts[i]["date_str"] = dateStr.format('YYYY-MM-DD HH:mm');
            // 첫번째 이미지
            const $ = cheerio.load(posts[i]["bo_content"]);
            const imageTag = $("img");
            posts[i]["img_link"] = imageTag.length
                ? imageTag.eq(0).attr("src")
                : "/no-image.png";
            posts[i]["text"] = $("p").text();
            // 카테고리 명
            const getCategoryObj = category_list.find(v => v.link === posts[i]["bo_category"]);
            posts[i]["category"] = getCategoryObj['name']
        }

    } catch (error) {

    }



    return { posts }
}