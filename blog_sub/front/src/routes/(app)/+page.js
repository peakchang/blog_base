
import cheerio from "cheerio";
import axios from "axios";
import { back_api } from "$src/lib/const";


export const load = async ({ fetch, url }) => {
    console.log(back_api);
    console.log(url);
    const subDomainName = url.hostname.split('.')[0]
    console.log(subDomainName);
    let returnSubDomainName = ""
    let content = {}

    try {
        console.log(`${back_api}/subview`);
        const res = await axios.post(`${back_api}/subview`, {
            subDomainName
        })
        console.log(res.data);
        if (res.data.status) {
            returnSubDomainName = res.data.subDomainName
        }
    } catch (error) {
        console.error(error.message);
    }




    return { returnSubDomainName }
}