const _0x19c9 = ['</h2>\x0a\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22card-body-container__contract\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<p>',
    'map', 'add', 'classList', 'language',
    '<div\x20class=\x22search-parameter\x22>\x0a\x20\x20\x20\x20<p\x20class=\x22search-parameter__title\x22><span>',
    'delete', 'new', '<button\x20class=\x22btn\x22\x20data-tools=\x22', '<span\x20class=\x22breadcrumb\x20header-title__feature\x22>Feature</span>', 'element', '.card-container', 'data.json', 'forEach',
    '\x22\x20onclick=\x22filterTools(this)\x22>', '\x0a\x20\x20\x20\x20\x20<div\x20class=\x22card\x20', 'push', 'innerHTML', '</p>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<p>•</p>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<p>',
    '\x22\x20onclick=\x22removeFilter(this)\x22>X</button>\x0a\x20\x20</div>\x20', '</span></p>\x0a\x20\x20\x20\x20<button\x20class=\x22search-parameter__button\x22\x20data-element=\x22', 'dataset', 'tools',
    '\x22>\x0a\x20\x20\x20\x20<div\x20class=\x22card-body\x22>\x0a\x20\x20\x20\x20\x20\x20<div\x20class=\x22card-body-logo\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20<img\x20\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20class=\x22card-body-logo__img\x22\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20src=\x22',
    'remove', 'querySelector', 'parameters-filter--active', 'onload', 'includes', 'freeze', 'has', 'flatMap', '.parameters-filter', 'values', '<span\x20class=\x22breadcrumb\x20header-title__new\x22>New!</span>',
    '</button>\x20\x20\x20\x20\x20\x20\x0a\x20\x20\x20\x20\x20\x20\x20\x20', 'filter', '</button>\x20\x20\x20\x20\x20\x20\x0a\x20\x20\x20\x20\x20\x20\x20\x20<button\x20class=\x22btn\x22\x20data-level=\x22', 'size', '\x0a\x20\x20\x20\x20\x20\x20\x20\x20', 'parameters-filter--deactive', '.parameter-filter__right',
    '\x22\x0a\x20\x20\x20\x20\x20\x20\x20\x20/>\x0a\x20\x20\x20\x20\x20\x20\x0a\x20\x20\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20\x20\x20<div\x20class=\x22card-body-container\x22>\x0a\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22card-body-container__header-title\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<h3>',
    '\x22\x20\x20onclick=\x22filterLevel(this)\x22>', 'log', 'asdf', 'feature', 'role'];


(function (_0x21bc96, _0x19c90f) {
    const _0x300aea = function (_0x300a75) {
        while (--_0x300a75) {
            _0x21bc96['push'](_0x21bc96['shift']());
        }
    };

    _0x300aea(++_0x19c90f);
}(_0x19c9, 0x178)); const _0x300a = function (_0x21bc96, _0x19c90f) {
    _0x21bc96 = _0x21bc96 - 0x0; let _0x300aea = _0x19c9[_0x21bc96];
    return _0x300aea;
};
const _0x153af4 = _0x300a; let jobs, cardContainer, cardSearch, filter, filters = new Set(), parameterFilter; async function getJobs() {
    const _0x304205 = _0x300a, _0x300a75 = await fetch(_0x304205('0x14'));
    jobs = await _0x300a75['json'](), jobs[_0x304205('0x15')](_0x5014e6 => {
        const _0x1651ce = _0x304205; _0x5014e6['isNew'] = _0x5014e6[_0x1651ce('0xf')];
    });
}
function setJob({
    languages: _0x4d5299, logo: _0x190315, position: _0x25157b, featured: _0x3183d7, tools: _0x5f3067,
    company: _0x25ecba, level: _0x1890b8, isNew: _0x1cf068, postedAt: _0x28bc7e, contract: _0x230f89,
    location: _0x5eda5f, role: _0xa32049 }) {
    const _0x5bd4ae = _0x300a;
    return _0x5bd4ae('0x17') + (_0x3183d7 ? _0x5bd4ae('0x6') : '') + _0x5bd4ae('0x1f') + _0x190315 +
        '\x22\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20alt=\x22' + _0x25ecba + _0x5bd4ae('0x2') +
        _0x25ecba + '</h3>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20' + (_0x1cf068 ? _0x5bd4ae('0x2a') : '')
        + '\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20' + (_0x3183d7 ? _0x5bd4ae('0x11') : '') +
        '\x0a\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20<h2\x20class=\x22card-body-container__title\x22>' +
        _0x25157b + _0x5bd4ae('0x8') + _0x28bc7e + _0x5bd4ae('0x1a') + _0x230f89 + _0x5bd4ae('0x1a') +
        _0x5eda5f +
        '</p>\x0a\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20\x20\x20<div\x20class=\x22card-body-tags\x22>\x20\x20\x20\x20\x20\x20\x20\x20\x0a\x20\x20\x20\x20\x20\x20\x20\x20<button\x20class=\x22btn\x22\x20data-role=\x22' +
        _0xa32049 + '\x22\x20onclick=\x22filterRole(this)\x22>' + _0xa32049 + _0x5bd4ae('0x2d') + _0x1890b8 + _0x5bd4ae('0x3') +
        _0x1890b8 + _0x5bd4ae('0x2b') + setTools(_0x5f3067) + _0x5bd4ae('0x2f') + setLanguages(_0x4d5299) +
        '\x0a\x20\x20\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20</div>\x0a\x20\x20</div>';
}
function setTools(_0x42fef6) {
    const _0x52514d = _0x300a;
    let _0x4f5e96 = ''; return _0x42fef6[_0x52514d('0x15')](_0xedc149 => {
        const _0x45431f = _0x52514d; _0x4f5e96 += _0x45431f('0x10') + _0xedc149 +
            _0x45431f('0x16') + _0xedc149 + '</button>';
    }), _0x4f5e96;
}
function setLanguages(_0x353a31) {
    const _0xf9dbfb = _0x300a;
    let _0x96c27a = '';
    return _0x353a31[_0xf9dbfb('0x15')](_0xba8f09 => {
        _0x96c27a +=
        '<button\x20class=\x22btn\x22\x20data-language=\x22' + _0xba8f09 +
        '\x22\x20onclick=\x22filterLanguages(this)\x22>' + _0xba8f09 + '</button>';
    }),
        _0x96c27a;
} function paint(_0x310035) {
    const _0x3de65a = _0x300a;
    cardSearch = document[_0x3de65a('0x21')](_0x3de65a('0x28')),
        filters[_0x3de65a('0x2e')] > 0x0 ? (cardSearch[_0x3de65a('0xb')][_0x3de65a('0xa')](_0x3de65a('0x22')),
            cardSearch['classList'][_0x3de65a('0x20')](_0x3de65a('0x0'))) : (filter = jobs, _0x310035 = jobs,
                cardSearch[_0x3de65a('0xb')][_0x3de65a('0x20')](_0x3de65a('0x22')),
                cardSearch[_0x3de65a('0xb')][_0x3de65a('0xa')](_0x3de65a('0x0'))),
        cardContainer['innerHTML'] = '',
        console[_0x3de65a('0x4')](jobs), _0x310035[_0x3de65a('0x15')]
            (_0x45c422 => cardContainer[_0x3de65a('0x19')] += setJob(_0x45c422)), setSearch();
}
function paintSearchParameters(_0x33b20e) {
    const _0x5467d2 = _0x300a;
    return _0x5467d2('0xd') + _0x33b20e + _0x5467d2('0x1c') + _0x33b20e + _0x5467d2('0x1b');
}
function setSearch() {
    const _0x350692 = _0x300a;
    parameterFilter = document[_0x350692('0x21')](_0x350692('0x1')),
        parameterFilter[_0x350692('0x19')] = '', filters['forEach']
            (_0x5b411f => parameterFilter[_0x350692('0x19')] += paintSearchParameters(_0x5b411f));
}
window[_0x153af4('0x23')] = async () => {
    const _0x500b39 = _0x153af4;
    cardContainer = document[_0x500b39('0x21')](_0x500b39('0x13')), await getJobs(),
        Object[_0x500b39('0x25')](jobs), filter = jobs, paint(jobs);
};
function filterRole(_0x90c261) {
    const _0xc3ef2e = _0x153af4;
    filters[_0xc3ef2e('0xa')](_0x90c261[_0xc3ef2e('0x1d')]['role']),
        console[_0xc3ef2e('0x4')](filters, _0xc3ef2e('0x5')),
        filter = filter[_0xc3ef2e('0x2c')]
            (_0xa91dcc => filters[_0xc3ef2e('0x26')](_0xa91dcc[_0xc3ef2e('0x7')])), paint(filter);
}
function filterLevel(_0x30d9f4) {
    const _0x5e7af1 = _0x153af4; filters[_0x5e7af1('0xa')](_0x30d9f4[_0x5e7af1('0x1d')]['level']),
        filter = []; let _0x3271e0 = jobs[_0x5e7af1('0x9')]
            (_0x1792e8 => Object[_0x5e7af1('0x29')](_0x1792e8)['flatMap'](_0x4beccf => _0x4beccf)), _0x11934d = 0x0; _0x3271e0[_0x5e7af1('0x15')]
                ((_0x506a36, _0x424311) => {
                    const _0x4c5a4e = _0x5e7af1;
                    filters[_0x4c5a4e('0x15')]
                        (_0x403538 => _0x506a36['includes'](_0x403538) ? _0x11934d++ : 0x0),
                        _0x11934d == filters[_0x4c5a4e('0x2e')] ? filter[_0x4c5a4e('0x18')]
                            (jobs[_0x424311]) : null, _0x11934d = 0x0;
                }), paint(filter);
}
function filterLanguages(_0x445d5a) { const _0x1f426b = _0x153af4; filters[_0x1f426b('0xa')](_0x445d5a['dataset'][_0x1f426b('0xc')]), filter = []; let _0x24f5a7 = jobs[_0x1f426b('0x9')](_0x3ce579 => Object[_0x1f426b('0x29')](_0x3ce579)['flatMap'](_0x4f4e9a => _0x4f4e9a)), _0x15c858 = 0x0; _0x24f5a7[_0x1f426b('0x15')]((_0x20c4a2, _0x558a5e) => { const _0x45698e = _0x1f426b; filters[_0x45698e('0x15')](_0x286368 => _0x20c4a2[_0x45698e('0x24')](_0x286368) ? _0x15c858++ : 0x0), _0x15c858 == filters[_0x45698e('0x2e')] ? filter[_0x45698e('0x18')](jobs[_0x558a5e]) : null, _0x15c858 = 0x0; }), paint(filter); } function filterTools(_0x3c4258) { const _0x2a9a69 = _0x153af4; filters[_0x2a9a69('0xa')](_0x3c4258[_0x2a9a69('0x1d')][_0x2a9a69('0x1e')]); let _0x47ad76 = 0x0; filter = []; let _0x3bc502 = jobs[_0x2a9a69('0x9')](_0x22e31b => Object[_0x2a9a69('0x29')](_0x22e31b)[_0x2a9a69('0x27')](_0x120f55 => _0x120f55)), _0x2643c9 = 0x0; _0x3bc502[_0x2a9a69('0x15')]((_0x1d98ae, _0x532ee5) => { const _0x342257 = _0x2a9a69; filters[_0x342257('0x15')](_0x1fed74 => _0x1d98ae[_0x342257('0x24')](_0x1fed74) ? _0x2643c9++ : 0x0), _0x2643c9 == filters[_0x342257('0x2e')] ? filter[_0x342257('0x18')](jobs[_0x532ee5]) : null, _0x2643c9 = 0x0; }), paint(filter); } function removeFilter(_0x503e1a) { const _0x4fd032 = _0x153af4; filters[_0x4fd032('0xe')](_0x503e1a['dataset'][_0x4fd032('0x12')]), filter = []; let _0x4b5a83 = jobs[_0x4fd032('0x9')](_0x4d10c3 => Object[_0x4fd032('0x29')](_0x4d10c3)[_0x4fd032('0x27')](_0x5c9d16 => _0x5c9d16)), _0xbe05c8 = 0x0; _0x4b5a83[_0x4fd032('0x15')]((_0x3d502d, _0x33679f) => { const _0x20c316 = _0x4fd032; filters[_0x20c316('0x15')](_0x1f0b6a => _0x3d502d['includes'](_0x1f0b6a) ? _0xbe05c8++ : 0x0), _0xbe05c8 == filters[_0x20c316('0x2e')] ? filter[_0x20c316('0x18')](jobs[_0x33679f]) : null, _0xbe05c8 = 0x0; }), paint(filter), setSearch(); } function removeCardSearch() {
    filters['clear'](),
    filter = jobs, paint(jobs);
}