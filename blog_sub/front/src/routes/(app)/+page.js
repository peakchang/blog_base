
import cheerio from "cheerio";
import axios from "axios";
import { back_api } from "$src/lib/const";
import { error } from '@sveltejs/kit';
import moment from "moment-timezone";

export const load = async ({ fetch, url }) => {
    const subDomainName = url.hostname.split('.')[0]
    let returnSubDomainName = ""
    let subView = {}
    let seoValue = {
        title: "",
        description: '',
        url: url.href,
        image: "",
        date: '',
        published_time: '',
        icon: `${url.origin}/favicon.png`,
    }

    try {
        const res = await axios.post(`${back_api}/subview`, {
            subDomainName
        })
        console.log(res.data);

        if (!res.data.subView) {
            return error('404', 'asjfaisjfilasjdf')
        } else if (res.data.status && res.data.subView['sb_domain']) {
            subView = res.data.subView;
        }
    } catch (error) {
        console.error(error.message);
    }



    const viewTextOnly = subView['sb_content'].replace(/<[^>]+>/g, ' ');
    const viewTextOnlyFilter = viewTextOnly.replace(/\s+/g, ' ').trim();
    seoValue['description'] = truncateTextTo100Chars(viewTextOnlyFilter);

    // image
    const $ = cheerio.load(subView['sb_content']);
    const imageTag = $("img");
    seoValue["image"] = imageTag.length
        ? imageTag.eq(0).attr("src")
        : "/no-image.png";

    // published_time
    seoValue['published_time'] = subView['sb_updated_at'] ? subView['sb_updated_at'] : subView['sb_created_at']

    // date
    const date = new Date(seoValue['published_time']);
    const dateStr = moment.tz(date, 'Asia/Seoul');
    seoValue['date'] = dateStr.format('YYYY-MM-DD');
    subView["date_str"] = dateStr.format('YYYY-MM-DD HH:mm');


    console.log(seoValue);
    console.log(subView);




    return { subView }
}


function truncateTextTo100Chars(text) {
    if (text.length <= 100) {
        return text;
    }

    // 100자 뒤의 가장 가까운 띄어쓰기를 찾음
    const truncatedText = text.substr(0, 200);
    const lastSpaceIndex = truncatedText.lastIndexOf(' ');

    if (lastSpaceIndex === -1) {
        // 띄어쓰기를 찾지 못한 경우, 그냥 100자까지 자름
        return truncatedText;
    }

    // 가장 가까운 띄어쓰기까지 잘라서 반환
    return truncatedText.substr(0, lastSpaceIndex);
}