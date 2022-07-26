import {
    createClient,
    createPreviewSubscriptionHook,
    createImageUrlBuilder,
    createPortableTextComponent
} from 'next-sanity';

const config = {
    projectId: "imdxo5nd",
    dataset: "production",
    apiVersion: "2021-03-25",
    useCdn: false,

}

export const sanityClient = createClient(config);

export const usePreviewSubscriptionHook = createPreviewSubscriptionHook(config);

export const urlFor = source => createImageUrlBuilder(config.image(source));

export const portableText = createPortableTextComponent({
    ...config,
    serializers: {}
})