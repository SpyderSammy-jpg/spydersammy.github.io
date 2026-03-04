/*global Ultraviolet*/
self.__uv$config = {
    prefix: '/service/',
    /* Replace the URL below with a working Public Bare Server */
    bare: 'https://bare.benropro.me', 
    encodeUrl: Ultraviolet.codec.xor.encode,
    decodeUrl: Ultraviolet.codec.xor.decode,
    handler: '/uv/uv.handler.js',
    bundle: '/uv/uv.bundle.js',
    config: '/uv/uv.config.js',
    sw: '/uv/uv.sw.js',
};
