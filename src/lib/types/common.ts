export type componentType = {
    any: {}
}

export type wpPage = {
    data: {
        page: {
           editorBlocks: any;
           title: string,
           content: string 
       }
   }
}

export type Sponsor = {
    name: string,
    webpage: string,
    logo: string,
    mainsponsor: boolean
}