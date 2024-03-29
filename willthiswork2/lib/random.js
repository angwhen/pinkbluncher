/* start module: random */
$pyjs['loaded_modules']['random'] = function (__mod_name__) {
	if($pyjs['loaded_modules']['random']['__was_initialized__']) return $pyjs['loaded_modules']['random'];
	var $m = $pyjs['loaded_modules']['random'];
	$m['__repr__'] = function() { return '<module: random>'; };
	$m['__was_initialized__'] = true;
	if ((__mod_name__ === null) || (typeof __mod_name__ == 'undefined')) __mod_name__ = 'random';
	$m['__name__'] = __mod_name__;
	$m.__track_lines__ = new Array();
	try {
		$m.__track_lines__[1] = 'random.py, line 1:\n    from __pyjamas__ import JS';
		$m.__track_lines__[5] = 'random.py, line 5:\n    from math import log as _log, exp as _exp, pi as _pi, e as _e, ceil as _ceil';
		$m.__track_lines__[6] = 'random.py, line 6:\n    from math import sqrt as _sqrt, acos as _acos, cos as _cos, sin as _sin';
		$m.__track_lines__[7] = 'random.py, line 7:\n    from os import urandom as _urandom';
		$m.__track_lines__[8] = 'random.py, line 8:\n    from binascii import hexlify as _hexlify';
		$m.__track_lines__[18] = 'random.py, line 18:\n    NV_MAGICCONST = 4 * _exp(-0.5)/_sqrt(2.0)';
		$m.__track_lines__[19] = 'random.py, line 19:\n    TWOPI = 2.0*_pi';
		$m.__track_lines__[20] = 'random.py, line 20:\n    LOG4 = _log(4.0)';
		$m.__track_lines__[21] = 'random.py, line 21:\n    SG_MAGICCONST = 1.0 + _log(4.5)';
		$m.__track_lines__[22] = 'random.py, line 22:\n    BPF = 53        # Number of bits in a float';
		$m.__track_lines__[23] = 'random.py, line 23:\n    RECIP_BPF = 2**-BPF';
		$m.__track_lines__[30] = 'random.py, line 30:\n    import _random';
		$m.__track_lines__[32] = 'random.py, line 32:\n    class Random(_random.Random):';
		$m.__track_lines__[33] = 'random.py, line 33:\n    VERSION = 3     # used by getstate/setstate';
		$m.__track_lines__[35] = 'random.py, line 35:\n    def __init__(self, x=None):';
		$m.__track_lines__[36] = 'random.py, line 36:\n    self.seed(x)';
		$m.__track_lines__[37] = 'random.py, line 37:\n    self.gauss_next = None';
		$m.__track_lines__[39] = 'random.py, line 39:\n    def seed(self, a=None):';
		$m.__track_lines__[46] = 'random.py, line 46:\n    if a is None:';
		$m.__track_lines__[47] = 'random.py, line 47:\n    try:';
		$m.__track_lines__[48] = 'random.py, line 48:\n    a = long(_hexlify(_urandom(16)), 16)';
		$m.__track_lines__[50] = 'random.py, line 50:\n    import time';
		$m.__track_lines__[51] = 'random.py, line 51:\n    a = long(time.time() * 256) # use fractional seconds';
		$m.__track_lines__[53] = 'random.py, line 53:\n    super(Random, self).seed(a)';
		$m.__track_lines__[54] = 'random.py, line 54:\n    self.gauss_next = None';
		$m.__track_lines__[56] = 'random.py, line 56:\n    def getstate(self):';
		$m.__track_lines__[58] = 'random.py, line 58:\n    return self.VERSION, super(Random, self).getstate(), self.gauss_next';
		$m.__track_lines__[60] = 'random.py, line 60:\n    def setstate(self, state):';
		$m.__track_lines__[62] = 'random.py, line 62:\n    version = state[0]';
		$m.__track_lines__[63] = 'random.py, line 63:\n    if version == 3:';
		$m.__track_lines__[64] = 'random.py, line 64:\n    version, internalstate, self.gauss_next = state';
		$m.__track_lines__[65] = 'random.py, line 65:\n    super(Random, self).setstate(internalstate)';
		$m.__track_lines__[67] = 'random.py, line 67:\n    version, internalstate, self.gauss_next = state';
		$m.__track_lines__[72] = 'random.py, line 72:\n    try:';
		$m.__track_lines__[73] = 'random.py, line 73:\n    internalstate = tuple( long(x) % (2**32) for x in internalstate )';
		$m.__track_lines__[75] = 'random.py, line 75:\n    raise TypeError, e';
		$m.__track_lines__[76] = 'random.py, line 76:\n    super(Random, self).setstate(internalstate)';
		$m.__track_lines__[78] = 'random.py, line 78:\n    raise ValueError("state with version %s passed to "';
		$m.__track_lines__[87] = 'random.py, line 87:\n    def __getstate__(self): # for pickle';
		$m.__track_lines__[88] = 'random.py, line 88:\n    return self.getstate()';
		$m.__track_lines__[90] = 'random.py, line 90:\n    def __setstate__(self, state):  # for pickle';
		$m.__track_lines__[91] = 'random.py, line 91:\n    self.setstate(state)';
		$m.__track_lines__[93] = 'random.py, line 93:\n    def __reduce__(self):';
		$m.__track_lines__[94] = 'random.py, line 94:\n    return self.__class__, (), self.getstate()';
		$m.__track_lines__[98] = 'random.py, line 98:\n    def randrange(self, start, stop=None, step=1, fint=int, default=None,';
		$m.__track_lines__[108] = 'random.py, line 108:\n    istart = fint(start)';
		$m.__track_lines__[109] = 'random.py, line 109:\n    if istart != start:';
		$m.__track_lines__[110] = 'random.py, line 110:\n    raise ValueError, "non-integer arg 1 for randrange()"';
		$m.__track_lines__[111] = 'random.py, line 111:\n    if stop is default:';
		$m.__track_lines__[112] = 'random.py, line 112:\n    if istart > 0:';
		$m.__track_lines__[113] = 'random.py, line 113:\n    if istart >= maxwidth:';
		$m.__track_lines__[114] = 'random.py, line 114:\n    return self._randbelow(istart)';
		$m.__track_lines__[115] = 'random.py, line 115:\n    return fint(self.random() * istart)';
		$m.__track_lines__[116] = 'random.py, line 116:\n    raise ValueError, "empty range for randrange()"';
		$m.__track_lines__[119] = 'random.py, line 119:\n    istop = fint(stop)';
		$m.__track_lines__[120] = 'random.py, line 120:\n    if istop != stop:';
		$m.__track_lines__[121] = 'random.py, line 121:\n    raise ValueError, "non-integer stop for randrange()"';
		$m.__track_lines__[122] = 'random.py, line 122:\n    width = istop - istart';
		$m.__track_lines__[123] = 'random.py, line 123:\n    if step == 1 and width > 0:';
		$m.__track_lines__[137] = 'random.py, line 137:\n    if width >= maxwidth:';
		$m.__track_lines__[138] = 'random.py, line 138:\n    return fint(istart + self._randbelow(width))';
		$m.__track_lines__[139] = 'random.py, line 139:\n    return fint(istart + fint(self.random()*width))';
		$m.__track_lines__[140] = 'random.py, line 140:\n    if step == 1:';
		$m.__track_lines__[141] = 'random.py, line 141:\n    raise ValueError, "empty range for randrange() (%d,%d, %d)" % (istart, istop, width)';
		$m.__track_lines__[144] = 'random.py, line 144:\n    istep = fint(step)';
		$m.__track_lines__[145] = 'random.py, line 145:\n    if istep != step:';
		$m.__track_lines__[146] = 'random.py, line 146:\n    raise ValueError, "non-integer step for randrange()"';
		$m.__track_lines__[147] = 'random.py, line 147:\n    if istep > 0:';
		$m.__track_lines__[148] = 'random.py, line 148:\n    n = (width + istep - 1) // istep';
		$m.__track_lines__[150] = 'random.py, line 150:\n    n = (width + istep + 1) // istep';
		$m.__track_lines__[152] = 'random.py, line 152:\n    raise ValueError, "zero step for randrange()"';
		$m.__track_lines__[154] = 'random.py, line 154:\n    if n <= 0:';
		$m.__track_lines__[155] = 'random.py, line 155:\n    raise ValueError, "empty range for randrange()"';
		$m.__track_lines__[157] = 'random.py, line 157:\n    if n >= maxwidth:';
		$m.__track_lines__[158] = 'random.py, line 158:\n    return istart + istep*self._randbelow(n)';
		$m.__track_lines__[159] = 'random.py, line 159:\n    return istart + istep*fint(self.random() * n)';
		$m.__track_lines__[161] = 'random.py, line 161:\n    def randint(self, a, b):';
		$m.__track_lines__[165] = 'random.py, line 165:\n    return self.randrange(a, b+1)';
		$m.__track_lines__[167] = 'random.py, line 167:\n    def _randbelow(self, n, _log=_log, fint=int, _maxwidth=1L<<BPF):';
		$m.__track_lines__[175] = 'random.py, line 175:\n    try:';
		$m.__track_lines__[176] = 'random.py, line 176:\n    getrandbits = self.getrandbits';
		$m.__track_lines__[178] = 'random.py, line 178:\n    pass';
		$m.__track_lines__[184] = 'random.py, line 184:\n    if True:';
		$m.__track_lines__[185] = 'random.py, line 185:\n    k = fint(1.00001 + _log(n-1, 2.0))   # 2**k > n-1 > 2**(k-2)';
		$m.__track_lines__[186] = 'random.py, line 186:\n    r = getrandbits(k)';
		$m.__track_lines__[187] = 'random.py, line 187:\n    while r >= n:';
		$m.__track_lines__[188] = 'random.py, line 188:\n    r = getrandbits(k)';
		$m.__track_lines__[189] = 'random.py, line 189:\n    return long(r)';
		$m.__track_lines__[193] = 'random.py, line 193:\n    return fint(self.random() * n)';
		$m.__track_lines__[197] = 'random.py, line 197:\n    def choice(self, seq):';
		$m.__track_lines__[199] = 'random.py, line 199:\n    return seq[int(self.random() * len(seq))]  # raises IndexError if seq is empty';
		$m.__track_lines__[201] = 'random.py, line 201:\n    def shuffle(self, x, random=None, fint=int):';
		$m.__track_lines__[207] = 'random.py, line 207:\n    if random is None:';
		$m.__track_lines__[208] = 'random.py, line 208:\n    random = self.random';
		$m.__track_lines__[209] = 'random.py, line 209:\n    for i in reversed(xrange(1, len(x))):';
		$m.__track_lines__[211] = 'random.py, line 211:\n    j = fint(random() * (i+1))';
		$m.__track_lines__[212] = 'random.py, line 212:\n    x[i], x[j] = x[j], x[i]';
		$m.__track_lines__[214] = 'random.py, line 214:\n    def sample(self, population, k):';
		$m.__track_lines__[250] = 'random.py, line 250:\n    n = len(population)';
		$m.__track_lines__[251] = 'random.py, line 251:\n    if not 0 <= k <= n:';
		$m.__track_lines__[252] = 'random.py, line 252:\n    raise ValueError, "sample larger than population"';
		$m.__track_lines__[253] = 'random.py, line 253:\n    __random = self.random';
		$m.__track_lines__[254] = 'random.py, line 254:\n    _int = int';
		$m.__track_lines__[255] = 'random.py, line 255:\n    result = [None] * k';
		$m.__track_lines__[256] = 'random.py, line 256:\n    setsize = 21        # size of a small set minus size of an empty list';
		$m.__track_lines__[257] = 'random.py, line 257:\n    if k > 5:';
		$m.__track_lines__[258] = 'random.py, line 258:\n    setsize += 4 ** _ceil(_log(k * 3, 4)) # table size for big sets';
		$m.__track_lines__[259] = 'random.py, line 259:\n    if n <= setsize or hasattr(population, "keys"):';
		$m.__track_lines__[262] = 'random.py, line 262:\n    pool = list(population)';
		$m.__track_lines__[263] = 'random.py, line 263:\n    for i in xrange(k):         # invariant:  non-selected at [0,n-i)';
		$m.__track_lines__[264] = 'random.py, line 264:\n    j = _int(__random() * (n-i))';
		$m.__track_lines__[265] = 'random.py, line 265:\n    result[i] = pool[j]';
		$m.__track_lines__[266] = 'random.py, line 266:\n    pool[j] = pool[n-i-1]   # move non-selected item into vacancy';
		$m.__track_lines__[268] = 'random.py, line 268:\n    try:';
		$m.__track_lines__[269] = 'random.py, line 269:\n    selected = set()';
		$m.__track_lines__[270] = 'random.py, line 270:\n    selected_add = selected.add';
		$m.__track_lines__[271] = 'random.py, line 271:\n    for i in xrange(k):';
		$m.__track_lines__[272] = 'random.py, line 272:\n    j = _int(__random() * n)';
		$m.__track_lines__[273] = 'random.py, line 273:\n    while j in selected:';
		$m.__track_lines__[274] = 'random.py, line 274:\n    j = _int(__random() * n)';
		$m.__track_lines__[275] = 'random.py, line 275:\n    selected_add(j)';
		$m.__track_lines__[276] = 'random.py, line 276:\n    result[i] = population[j]';
		$m.__track_lines__[278] = 'random.py, line 278:\n    if isinstance(population, list):';
		$m.__track_lines__[279] = 'random.py, line 279:\n    raise';
		$m.__track_lines__[280] = 'random.py, line 280:\n    return self.sample(tuple(population), k)';
		$m.__track_lines__[281] = 'random.py, line 281:\n    return result';
		$m.__track_lines__[287] = 'random.py, line 287:\n    def uniform(self, a, b):';
		$m.__track_lines__[289] = 'random.py, line 289:\n    return a + (b-a) * self.random()';
		$m.__track_lines__[293] = 'random.py, line 293:\n    def triangular(self, low=0.0, high=1.0, mode=None):';
		$m.__track_lines__[301] = 'random.py, line 301:\n    u = self.random()';
		$m.__track_lines__[302] = 'random.py, line 302:\n    c = 0.5 if mode is None else (mode - low) / (high - low)';
		$m.__track_lines__[303] = 'random.py, line 303:\n    if u > c:';
		$m.__track_lines__[304] = 'random.py, line 304:\n    u = 1.0 - u';
		$m.__track_lines__[305] = 'random.py, line 305:\n    c = 1.0 - c';
		$m.__track_lines__[306] = 'random.py, line 306:\n    low, high = high, low';
		$m.__track_lines__[307] = 'random.py, line 307:\n    return low + (high - low) * (u * c) ** 0.5';
		$m.__track_lines__[311] = 'random.py, line 311:\n    def normalvariate(self, mu, sigma):';
		$m.__track_lines__[322] = 'random.py, line 322:\n    __random = self.random';
		$m.__track_lines__[323] = 'random.py, line 323:\n    while 1:';
		$m.__track_lines__[324] = 'random.py, line 324:\n    u1 = __random()';
		$m.__track_lines__[325] = 'random.py, line 325:\n    u2 = 1.0 - __random()';
		$m.__track_lines__[326] = 'random.py, line 326:\n    z = NV_MAGICCONST*(u1-0.5)/u2';
		$m.__track_lines__[327] = 'random.py, line 327:\n    zz = z*z/4.0';
		$m.__track_lines__[328] = 'random.py, line 328:\n    if zz <= -_log(u2):';
		$m.__track_lines__[329] = 'random.py, line 329:\n    break';
		$m.__track_lines__[330] = 'random.py, line 330:\n    return mu + z*sigma';
		$m.__track_lines__[334] = 'random.py, line 334:\n    def lognormvariate(self, mu, sigma):';
		$m.__track_lines__[340] = 'random.py, line 340:\n    return _exp(self.normalvariate(mu, sigma))';
		$m.__track_lines__[344] = 'random.py, line 344:\n    def expovariate(self, lambd):';
		$m.__track_lines__[355] = 'random.py, line 355:\n    __random = self.random';
		$m.__track_lines__[356] = 'random.py, line 356:\n    u = __random()';
		$m.__track_lines__[357] = 'random.py, line 357:\n    while u <= 1e-7:';
		$m.__track_lines__[358] = 'random.py, line 358:\n    u = __random()';
		$m.__track_lines__[359] = 'random.py, line 359:\n    return -_log(u)/lambd';
		$m.__track_lines__[363] = 'random.py, line 363:\n    def vonmisesvariate(self, mu, kappa):';
		$m.__track_lines__[381] = 'random.py, line 381:\n    __random = self.random';
		$m.__track_lines__[382] = 'random.py, line 382:\n    if kappa <= 1e-6:';
		$m.__track_lines__[383] = 'random.py, line 383:\n    return TWOPI * __random()';
		$m.__track_lines__[385] = 'random.py, line 385:\n    a = 1.0 + _sqrt(1.0 + 4.0 * kappa * kappa)';
		$m.__track_lines__[386] = 'random.py, line 386:\n    b = (a - _sqrt(2.0 * a))/(2.0 * kappa)';
		$m.__track_lines__[387] = 'random.py, line 387:\n    r = (1.0 + b * b)/(2.0 * b)';
		$m.__track_lines__[389] = 'random.py, line 389:\n    while 1:';
		$m.__track_lines__[390] = 'random.py, line 390:\n    u1 = __random()';
		$m.__track_lines__[392] = 'random.py, line 392:\n    z = _cos(_pi * u1)';
		$m.__track_lines__[393] = 'random.py, line 393:\n    f = (1.0 + r * z)/(r + z)';
		$m.__track_lines__[394] = 'random.py, line 394:\n    c = kappa * (r - f)';
		$m.__track_lines__[396] = 'random.py, line 396:\n    u2 = __random()';
		$m.__track_lines__[398] = 'random.py, line 398:\n    if u2 < c * (2.0 - c) or u2 <= c * _exp(1.0 - c):';
		$m.__track_lines__[399] = 'random.py, line 399:\n    break';
		$m.__track_lines__[401] = 'random.py, line 401:\n    u3 = __random()';
		$m.__track_lines__[402] = 'random.py, line 402:\n    if u3 > 0.5:';
		$m.__track_lines__[403] = 'random.py, line 403:\n    theta = (mu % TWOPI) + _acos(f)';
		$m.__track_lines__[405] = 'random.py, line 405:\n    theta = (mu % TWOPI) - _acos(f)';
		$m.__track_lines__[407] = 'random.py, line 407:\n    return theta';
		$m.__track_lines__[411] = 'random.py, line 411:\n    def gammavariate(self, alpha, beta):';
		$m.__track_lines__[420] = 'random.py, line 420:\n    if alpha <= 0.0 or beta <= 0.0:';
		$m.__track_lines__[421] = "random.py, line 421:\n    raise ValueError, 'gammavariate: alpha and beta must be > 0.0'";
		$m.__track_lines__[423] = 'random.py, line 423:\n    __random = self.random';
		$m.__track_lines__[424] = 'random.py, line 424:\n    if alpha > 1.0:';
		$m.__track_lines__[430] = 'random.py, line 430:\n    ainv = _sqrt(2.0 * alpha - 1.0)';
		$m.__track_lines__[431] = 'random.py, line 431:\n    bbb = alpha - LOG4';
		$m.__track_lines__[432] = 'random.py, line 432:\n    ccc = alpha + ainv';
		$m.__track_lines__[434] = 'random.py, line 434:\n    while 1:';
		$m.__track_lines__[435] = 'random.py, line 435:\n    u1 = __random()';
		$m.__track_lines__[436] = 'random.py, line 436:\n    if not 1e-7 < u1 < .9999999:';
		$m.__track_lines__[437] = 'random.py, line 437:\n    continue';
		$m.__track_lines__[438] = 'random.py, line 438:\n    u2 = 1.0 - __random()';
		$m.__track_lines__[439] = 'random.py, line 439:\n    v = _log(u1/(1.0-u1))/ainv';
		$m.__track_lines__[440] = 'random.py, line 440:\n    x = alpha*_exp(v)';
		$m.__track_lines__[441] = 'random.py, line 441:\n    z = u1*u1*u2';
		$m.__track_lines__[442] = 'random.py, line 442:\n    r = bbb+ccc*v-x';
		$m.__track_lines__[443] = 'random.py, line 443:\n    if r + SG_MAGICCONST - 4.5*z >= 0.0 or r >= _log(z):';
		$m.__track_lines__[444] = 'random.py, line 444:\n    return x * beta';
		$m.__track_lines__[448] = 'random.py, line 448:\n    u = __random()';
		$m.__track_lines__[449] = 'random.py, line 449:\n    while u <= 1e-7:';
		$m.__track_lines__[450] = 'random.py, line 450:\n    u = __random()';
		$m.__track_lines__[451] = 'random.py, line 451:\n    return -_log(u) * beta';
		$m.__track_lines__[457] = 'random.py, line 457:\n    while 1:';
		$m.__track_lines__[458] = 'random.py, line 458:\n    u = __random()';
		$m.__track_lines__[459] = 'random.py, line 459:\n    b = (_e + alpha)/_e';
		$m.__track_lines__[460] = 'random.py, line 460:\n    p = b*u';
		$m.__track_lines__[461] = 'random.py, line 461:\n    if p <= 1.0:';
		$m.__track_lines__[462] = 'random.py, line 462:\n    x = p ** (1.0/alpha)';
		$m.__track_lines__[464] = 'random.py, line 464:\n    x = -_log((b-p)/alpha)';
		$m.__track_lines__[465] = 'random.py, line 465:\n    u1 = __random()';
		$m.__track_lines__[466] = 'random.py, line 466:\n    if p > 1.0:';
		$m.__track_lines__[467] = 'random.py, line 467:\n    if u1 <= x ** (alpha - 1.0):';
		$m.__track_lines__[468] = 'random.py, line 468:\n    break';
		$m.__track_lines__[470] = 'random.py, line 470:\n    break';
		$m.__track_lines__[471] = 'random.py, line 471:\n    return x * beta';
		$m.__track_lines__[475] = 'random.py, line 475:\n    def gauss(self, mu, sigma):';
		$m.__track_lines__[500] = 'random.py, line 500:\n    __random = self.random';
		$m.__track_lines__[501] = 'random.py, line 501:\n    z = self.gauss_next';
		$m.__track_lines__[502] = 'random.py, line 502:\n    self.gauss_next = None';
		$m.__track_lines__[503] = 'random.py, line 503:\n    if z is None:';
		$m.__track_lines__[504] = 'random.py, line 504:\n    x2pi = __random() * TWOPI';
		$m.__track_lines__[505] = 'random.py, line 505:\n    g2rad = _sqrt(-2.0 * _log(1.0 - __random()))';
		$m.__track_lines__[506] = 'random.py, line 506:\n    z = _cos(x2pi) * g2rad';
		$m.__track_lines__[507] = 'random.py, line 507:\n    self.gauss_next = _sin(x2pi) * g2rad';
		$m.__track_lines__[509] = 'random.py, line 509:\n    return mu + z*sigma';
		$m.__track_lines__[525] = 'random.py, line 525:\n    def betavariate(self, alpha, beta):';
		$m.__track_lines__[533] = 'random.py, line 533:\n    y = self.gammavariate(alpha, 1.)';
		$m.__track_lines__[534] = 'random.py, line 534:\n    if y == 0:';
		$m.__track_lines__[535] = 'random.py, line 535:\n    return 0.0';
		$m.__track_lines__[537] = 'random.py, line 537:\n    return y / (y + self.gammavariate(beta, 1.))';
		$m.__track_lines__[541] = 'random.py, line 541:\n    def paretovariate(self, alpha):';
		$m.__track_lines__[545] = 'random.py, line 545:\n    u = 1.0 - self.random()';
		$m.__track_lines__[546] = 'random.py, line 546:\n    return 1.0 / pow(u, 1.0/alpha)';
		$m.__track_lines__[550] = 'random.py, line 550:\n    def weibullvariate(self, alpha, beta):';
		$m.__track_lines__[556] = 'random.py, line 556:\n    u = 1.0 - self.random()';
		$m.__track_lines__[557] = 'random.py, line 557:\n    return alpha * pow(-_log(u), 1.0/beta)';
		$m.__track_lines__[561] = 'random.py, line 561:\n    class WichmannHill(Random):';
		$m.__track_lines__[563] = 'random.py, line 563:\n    VERSION = 1     # used by getstate/setstate';
		$m.__track_lines__[565] = 'random.py, line 565:\n    def seed(self, a=None):';
		$m.__track_lines__[579] = 'random.py, line 579:\n    if a is None:';
		$m.__track_lines__[580] = 'random.py, line 580:\n    try:';
		$m.__track_lines__[581] = 'random.py, line 581:\n    a = long(_hexlify(_urandom(16)), 16)';
		$m.__track_lines__[583] = 'random.py, line 583:\n    import time';
		$m.__track_lines__[584] = 'random.py, line 584:\n    a = long(time.time() * 256) # use fractional seconds';
		$m.__track_lines__[586] = 'random.py, line 586:\n    if not isinstance(a, (int, long)):';
		$m.__track_lines__[587] = 'random.py, line 587:\n    a = hash(a)';
		$m.__track_lines__[589] = 'random.py, line 589:\n    a, x = divmod(a, 30268)';
		$m.__track_lines__[590] = 'random.py, line 590:\n    a, y = divmod(a, 30306)';
		$m.__track_lines__[591] = 'random.py, line 591:\n    a, z = divmod(a, 30322)';
		$m.__track_lines__[592] = 'random.py, line 592:\n    self._seed = int(x)+1, int(y)+1, int(z)+1';
		$m.__track_lines__[594] = 'random.py, line 594:\n    self.gauss_next = None';
		$m.__track_lines__[596] = 'random.py, line 596:\n    def random(self):';
		$m.__track_lines__[616] = 'random.py, line 616:\n    x, y, z = self._seed';
		$m.__track_lines__[617] = 'random.py, line 617:\n    x = (171 * x) % 30269';
		$m.__track_lines__[618] = 'random.py, line 618:\n    y = (172 * y) % 30307';
		$m.__track_lines__[619] = 'random.py, line 619:\n    z = (170 * z) % 30323';
		$m.__track_lines__[620] = 'random.py, line 620:\n    self._seed = x, y, z';
		$m.__track_lines__[625] = 'random.py, line 625:\n    return (x/30269.0 + y/30307.0 + z/30323.0) % 1.0';
		$m.__track_lines__[627] = 'random.py, line 627:\n    def getstate(self):';
		$m.__track_lines__[629] = 'random.py, line 629:\n    return self.VERSION, self._seed, self.gauss_next';
		$m.__track_lines__[631] = 'random.py, line 631:\n    def setstate(self, state):';
		$m.__track_lines__[633] = 'random.py, line 633:\n    version = state[0]';
		$m.__track_lines__[634] = 'random.py, line 634:\n    if version == 1:';
		$m.__track_lines__[635] = 'random.py, line 635:\n    version, self._seed, self.gauss_next = state';
		$m.__track_lines__[637] = 'random.py, line 637:\n    raise ValueError("state with version %s passed to "';
		$m.__track_lines__[641] = 'random.py, line 641:\n    def jumpahead(self, n):';
		$m.__track_lines__[655] = 'random.py, line 655:\n    if not n >= 0:';
		$m.__track_lines__[656] = 'random.py, line 656:\n    raise ValueError("n must be >= 0")';
		$m.__track_lines__[657] = 'random.py, line 657:\n    x, y, z = self._seed';
		$m.__track_lines__[658] = 'random.py, line 658:\n    x = int(x * pow(171, n, 30269)) % 30269';
		$m.__track_lines__[659] = 'random.py, line 659:\n    y = int(y * pow(172, n, 30307)) % 30307';
		$m.__track_lines__[660] = 'random.py, line 660:\n    z = int(z * pow(170, n, 30323)) % 30323';
		$m.__track_lines__[661] = 'random.py, line 661:\n    self._seed = x, y, z';
		$m.__track_lines__[663] = 'random.py, line 663:\n    def __whseed(self, x=0, y=0, z=0):';
		$m.__track_lines__[668] = 'random.py, line 668:\n    if not type(x) == type(y) == type(z) == int:';
		$m.__track_lines__[669] = "random.py, line 669:\n    raise TypeError('seeds must be integers')";
		$m.__track_lines__[670] = 'random.py, line 670:\n    if not (0 <= x < 256 and 0 <= y < 256 and 0 <= z < 256):';
		$m.__track_lines__[671] = "random.py, line 671:\n    raise ValueError('seeds must be in range(0, 256)')";
		$m.__track_lines__[672] = 'random.py, line 672:\n    if 0 == x == y == z:';
		$m.__track_lines__[674] = 'random.py, line 674:\n    import time';
		$m.__track_lines__[675] = 'random.py, line 675:\n    t = long(time.time() * 256)';
		$m.__track_lines__[676] = 'random.py, line 676:\n    t = int((t&0xffffff) ^ (t>>24))';
		$m.__track_lines__[677] = 'random.py, line 677:\n    t, x = divmod(t, 256)';
		$m.__track_lines__[678] = 'random.py, line 678:\n    t, y = divmod(t, 256)';
		$m.__track_lines__[679] = 'random.py, line 679:\n    t, z = divmod(t, 256)';
		$m.__track_lines__[681] = 'random.py, line 681:\n    self._seed = (x or 1, y or 1, z or 1)';
		$m.__track_lines__[683] = 'random.py, line 683:\n    self.gauss_next = None';
		$m.__track_lines__[685] = 'random.py, line 685:\n    def whseed(self, a=None):';
		$m.__track_lines__[696] = 'random.py, line 696:\n    if a is None:';
		$m.__track_lines__[697] = 'random.py, line 697:\n    self.__whseed()';
		$m.__track_lines__[698] = 'random.py, line 698:\n    return';
		$m.__track_lines__[699] = 'random.py, line 699:\n    a = hash(a)';
		$m.__track_lines__[700] = 'random.py, line 700:\n    a, x = divmod(a, 256)';
		$m.__track_lines__[701] = 'random.py, line 701:\n    a, y = divmod(a, 256)';
		$m.__track_lines__[702] = 'random.py, line 702:\n    a, z = divmod(a, 256)';
		$m.__track_lines__[703] = 'random.py, line 703:\n    x = (x + a) % 256 or 1';
		$m.__track_lines__[704] = 'random.py, line 704:\n    y = (y + a) % 256 or 1';
		$m.__track_lines__[705] = 'random.py, line 705:\n    z = (z + a) % 256 or 1';
		$m.__track_lines__[706] = 'random.py, line 706:\n    self.__whseed(x, y, z)';
		$m.__track_lines__[710] = 'random.py, line 710:\n    class SystemRandom(Random):';
		$m.__track_lines__[718] = 'random.py, line 718:\n    def random(self):';
		$m.__track_lines__[720] = 'random.py, line 720:\n    return (long(_hexlify(_urandom(7)), 16) >> 3) * RECIP_BPF';
		$m.__track_lines__[722] = 'random.py, line 722:\n    def getrandbits(self, k):';
		$m.__track_lines__[724] = 'random.py, line 724:\n    if k <= 0:';
		$m.__track_lines__[725] = "random.py, line 725:\n    raise ValueError('number of bits must be greater than zero')";
		$m.__track_lines__[726] = 'random.py, line 726:\n    if k != int(k):';
		$m.__track_lines__[727] = "random.py, line 727:\n    raise TypeError('number of bits should be an integer')";
		$m.__track_lines__[728] = 'random.py, line 728:\n    bytes = (k + 7) // 8                    # bits / 8 and rounded up';
		$m.__track_lines__[729] = 'random.py, line 729:\n    x = long(_hexlify(_urandom(bytes)), 16)';
		$m.__track_lines__[730] = 'random.py, line 730:\n    return x >> (bytes * 8 - k)             # trim excess bits';
		$m.__track_lines__[732] = 'random.py, line 732:\n    def _stub(self, *args, **kwds):';
		$m.__track_lines__[734] = 'random.py, line 734:\n    return None';
		$m.__track_lines__[735] = 'random.py, line 735:\n    seed = jumpahead = _stub';
		$m.__track_lines__[737] = 'random.py, line 737:\n    def _notimplemented(self, *args, **kwds):';
		$m.__track_lines__[739] = "random.py, line 739:\n    raise NotImplementedError('System entropy source does not have state.')";
		$m.__track_lines__[740] = 'random.py, line 740:\n    getstate = setstate = _notimplemented';
		$m.__track_lines__[744] = 'random.py, line 744:\n    def _test_generator(n, func, args):';
		$m.__track_lines__[745] = 'random.py, line 745:\n    import time';
		$m.__track_lines__[746] = "random.py, line 746:\n    print n, 'times', func.__name__";
		$m.__track_lines__[747] = 'random.py, line 747:\n    total = 0.0';
		$m.__track_lines__[748] = 'random.py, line 748:\n    sqsum = 0.0';
		$m.__track_lines__[749] = 'random.py, line 749:\n    smallest = 1e10';
		$m.__track_lines__[750] = 'random.py, line 750:\n    largest = -1e10';
		$m.__track_lines__[751] = 'random.py, line 751:\n    t0 = time.time()';
		$m.__track_lines__[752] = 'random.py, line 752:\n    for i in range(n):';
		$m.__track_lines__[753] = 'random.py, line 753:\n    x = func(*args)';
		$m.__track_lines__[754] = 'random.py, line 754:\n    total += x';
		$m.__track_lines__[755] = 'random.py, line 755:\n    sqsum = sqsum + x*x';
		$m.__track_lines__[756] = 'random.py, line 756:\n    smallest = min(x, smallest)';
		$m.__track_lines__[757] = 'random.py, line 757:\n    largest = max(x, largest)';
		$m.__track_lines__[758] = 'random.py, line 758:\n    t1 = time.time()';
		$m.__track_lines__[759] = "random.py, line 759:\n    print round(t1-t0, 3), 'sec,',";
		$m.__track_lines__[760] = 'random.py, line 760:\n    avg = total/n';
		$m.__track_lines__[761] = 'random.py, line 761:\n    stddev = _sqrt(sqsum/n - avg*avg)';
		$m.__track_lines__[762] = "random.py, line 762:\n    print 'avg %g, stddev %g, min %g, max %g' % \\";
		$m.__track_lines__[766] = 'random.py, line 766:\n    def _test(N=2000):';
		$m.__track_lines__[767] = 'random.py, line 767:\n    _test_generator(N, random, ())';
		$m.__track_lines__[768] = 'random.py, line 768:\n    _test_generator(N, normalvariate, (0.0, 1.0))';
		$m.__track_lines__[769] = 'random.py, line 769:\n    _test_generator(N, lognormvariate, (0.0, 1.0))';
		$m.__track_lines__[770] = 'random.py, line 770:\n    _test_generator(N, vonmisesvariate, (0.0, 1.0))';
		$m.__track_lines__[771] = 'random.py, line 771:\n    _test_generator(N, gammavariate, (0.01, 1.0))';
		$m.__track_lines__[772] = 'random.py, line 772:\n    _test_generator(N, gammavariate, (0.1, 1.0))';
		$m.__track_lines__[773] = 'random.py, line 773:\n    _test_generator(N, gammavariate, (0.1, 2.0))';
		$m.__track_lines__[774] = 'random.py, line 774:\n    _test_generator(N, gammavariate, (0.5, 1.0))';
		$m.__track_lines__[775] = 'random.py, line 775:\n    _test_generator(N, gammavariate, (0.9, 1.0))';
		$m.__track_lines__[776] = 'random.py, line 776:\n    _test_generator(N, gammavariate, (1.0, 1.0))';
		$m.__track_lines__[777] = 'random.py, line 777:\n    _test_generator(N, gammavariate, (2.0, 1.0))';
		$m.__track_lines__[778] = 'random.py, line 778:\n    _test_generator(N, gammavariate, (20.0, 1.0))';
		$m.__track_lines__[779] = 'random.py, line 779:\n    _test_generator(N, gammavariate, (200.0, 1.0))';
		$m.__track_lines__[780] = 'random.py, line 780:\n    _test_generator(N, gauss, (0.0, 1.0))';
		$m.__track_lines__[781] = 'random.py, line 781:\n    _test_generator(N, betavariate, (3.0, 3.0))';
		$m.__track_lines__[782] = 'random.py, line 782:\n    _test_generator(N, triangular, (0.0, 1.0, 1.0/3.0))';
		$m.__track_lines__[790] = 'random.py, line 790:\n    _inst = Random()';
		$m.__track_lines__[791] = "random.py, line 791:\n    seed = getattr(_inst, 'seed')";
		$m.__track_lines__[792] = "random.py, line 792:\n    random = getattr(_inst, 'random')";
		$m.__track_lines__[793] = "random.py, line 793:\n    uniform = getattr(_inst, 'uniform')";
		$m.__track_lines__[794] = "random.py, line 794:\n    triangular = getattr(_inst, 'triangular')";
		$m.__track_lines__[795] = "random.py, line 795:\n    randint = getattr(_inst, 'randint')";
		$m.__track_lines__[796] = "random.py, line 796:\n    choice = getattr(_inst, 'choice')";
		$m.__track_lines__[797] = "random.py, line 797:\n    randrange = getattr(_inst, 'randrange')";
		$m.__track_lines__[798] = "random.py, line 798:\n    sample = getattr(_inst, 'sample')";
		$m.__track_lines__[799] = "random.py, line 799:\n    shuffle = getattr(_inst, 'shuffle')";
		$m.__track_lines__[800] = "random.py, line 800:\n    normalvariate = getattr(_inst, 'normalvariate')";
		$m.__track_lines__[801] = "random.py, line 801:\n    lognormvariate = getattr(_inst, 'lognormvariate')";
		$m.__track_lines__[802] = "random.py, line 802:\n    expovariate = getattr(_inst, 'expovariate')";
		$m.__track_lines__[803] = "random.py, line 803:\n    vonmisesvariate = getattr(_inst, 'vonmisesvariate')";
		$m.__track_lines__[804] = "random.py, line 804:\n    gammavariate = getattr(_inst, 'gammavariate')";
		$m.__track_lines__[805] = "random.py, line 805:\n    gauss = getattr(_inst, 'gauss')";
		$m.__track_lines__[806] = "random.py, line 806:\n    betavariate = getattr(_inst, 'betavariate')";
		$m.__track_lines__[807] = "random.py, line 807:\n    paretovariate = getattr(_inst, 'paretovariate')";
		$m.__track_lines__[808] = "random.py, line 808:\n    weibullvariate = getattr(_inst, 'weibullvariate')";
		$m.__track_lines__[809] = "random.py, line 809:\n    getstate = getattr(_inst, 'getstate')";
		$m.__track_lines__[810] = "random.py, line 810:\n    setstate = getattr(_inst, 'setstate')";
		$m.__track_lines__[811] = "random.py, line 811:\n    jumpahead = getattr(_inst, 'jumpahead')";
		$m.__track_lines__[812] = "random.py, line 812:\n    getrandbits = getattr(_inst, 'getrandbits')";
		$m.__track_lines__[814] = "random.py, line 814:\n    if __name__ == '__main__':";
		$m.__track_lines__[815] = 'random.py, line 815:\n    _test()';
		var $pow2,$pow1,$mul3,$add1,$mul4,$div2,$div1,$mul2,$mul1,$add2;
		var $constant_int_256 = new $p['int'](256);
		var $constant_int_0 = new $p['int'](0);
		var $constant_int_2 = new $p['int'](2);
		var $constant_int_3 = new $p['int'](3);
		var $constant_int_4 = new $p['int'](4);
		var $constant_int_5 = new $p['int'](5);
		var $constant_int_1 = new $p['int'](1);
		var $constant_int_8 = new $p['int'](8);
		var $constant_int_16 = new $p['int'](16);
		var $constant_int_21 = new $p['int'](21);
		var $constant_int_24 = new $p['int'](24);
		var $constant_int_32 = new $p['int'](32);
		var $constant_int_170 = new $p['int'](170);
		var $constant_int_171 = new $p['int'](171);
		var $constant_int_172 = new $p['int'](172);
		var $constant_int_53 = new $p['int'](53);
		var $constant_int_30268 = new $p['int'](30268);
		var $constant_int_30269 = new $p['int'](30269);
		var $constant_int_2000 = new $p['int'](2000);
		var $constant_int_7 = new $p['int'](7);
		var $constant_int_30306 = new $p['int'](30306);
		var $constant_int_30307 = new $p['int'](30307);
		var $constant_int_30322 = new $p['int'](30322);
		var $constant_int_30323 = new $p['int'](30323);
		var $constant_int_16777215 = new $p['int'](16777215);
		var $constant_long_1 = new $p['long'](1);
		$pyjs['track']['module']='random';
		$pyjs['track']['lineno']=1;
		$pyjs['track']['lineno']=1;
		$pyjs['track']['lineno']=5;
		$pyjs['track']={'module':$pyjs['track']['module'],'lineno':$pyjs['track']['lineno']};$pyjs['trackstack']['push']($pyjs['track']);
		$m['_log'] = $p['___import___']('math.log', null, null, false);
		$pyjs['trackstack']['pop']();$pyjs['track']=$pyjs['trackstack']['pop']();$pyjs['trackstack']['push']($pyjs['track']);
		$pyjs['track']={'module':$pyjs['track']['module'],'lineno':$pyjs['track']['lineno']};$pyjs['trackstack']['push']($pyjs['track']);
		$m['_exp'] = $p['___import___']('math.exp', null, null, false);
		$pyjs['trackstack']['pop']();$pyjs['track']=$pyjs['trackstack']['pop']();$pyjs['trackstack']['push']($pyjs['track']);
		$pyjs['track']={'module':$pyjs['track']['module'],'lineno':$pyjs['track']['lineno']};$pyjs['trackstack']['push']($pyjs['track']);
		$m['_pi'] = $p['___import___']('math.pi', null, null, false);
		$pyjs['trackstack']['pop']();$pyjs['track']=$pyjs['trackstack']['pop']();$pyjs['trackstack']['push']($pyjs['track']);
		$pyjs['track']={'module':$pyjs['track']['module'],'lineno':$pyjs['track']['lineno']};$pyjs['trackstack']['push']($pyjs['track']);
		$m['_e'] = $p['___import___']('math.e', null, null, false);
		$pyjs['trackstack']['pop']();$pyjs['track']=$pyjs['trackstack']['pop']();$pyjs['trackstack']['push']($pyjs['track']);
		$pyjs['track']={'module':$pyjs['track']['module'],'lineno':$pyjs['track']['lineno']};$pyjs['trackstack']['push']($pyjs['track']);
		$m['_ceil'] = $p['___import___']('math.ceil', null, null, false);
		$pyjs['trackstack']['pop']();$pyjs['track']=$pyjs['trackstack']['pop']();$pyjs['trackstack']['push']($pyjs['track']);
		$pyjs['track']['lineno']=6;
		$pyjs['track']={'module':$pyjs['track']['module'],'lineno':$pyjs['track']['lineno']};$pyjs['trackstack']['push']($pyjs['track']);
		$m['_sqrt'] = $p['___import___']('math.sqrt', null, null, false);
		$pyjs['trackstack']['pop']();$pyjs['track']=$pyjs['trackstack']['pop']();$pyjs['trackstack']['push']($pyjs['track']);
		$pyjs['track']={'module':$pyjs['track']['module'],'lineno':$pyjs['track']['lineno']};$pyjs['trackstack']['push']($pyjs['track']);
		$m['_acos'] = $p['___import___']('math.acos', null, null, false);
		$pyjs['trackstack']['pop']();$pyjs['track']=$pyjs['trackstack']['pop']();$pyjs['trackstack']['push']($pyjs['track']);
		$pyjs['track']={'module':$pyjs['track']['module'],'lineno':$pyjs['track']['lineno']};$pyjs['trackstack']['push']($pyjs['track']);
		$m['_cos'] = $p['___import___']('math.cos', null, null, false);
		$pyjs['trackstack']['pop']();$pyjs['track']=$pyjs['trackstack']['pop']();$pyjs['trackstack']['push']($pyjs['track']);
		$pyjs['track']={'module':$pyjs['track']['module'],'lineno':$pyjs['track']['lineno']};$pyjs['trackstack']['push']($pyjs['track']);
		$m['_sin'] = $p['___import___']('math.sin', null, null, false);
		$pyjs['trackstack']['pop']();$pyjs['track']=$pyjs['trackstack']['pop']();$pyjs['trackstack']['push']($pyjs['track']);
		$pyjs['track']['lineno']=7;
		$pyjs['track']={'module':$pyjs['track']['module'],'lineno':$pyjs['track']['lineno']};$pyjs['trackstack']['push']($pyjs['track']);
		$m['_urandom'] = $p['___import___']('os.urandom', null, null, false);
		$pyjs['trackstack']['pop']();$pyjs['track']=$pyjs['trackstack']['pop']();$pyjs['trackstack']['push']($pyjs['track']);
		$pyjs['track']['lineno']=8;
		$pyjs['track']={'module':$pyjs['track']['module'],'lineno':$pyjs['track']['lineno']};$pyjs['trackstack']['push']($pyjs['track']);
		$m['_hexlify'] = $p['___import___']('binascii.hexlify', null, null, false);
		$pyjs['trackstack']['pop']();$pyjs['track']=$pyjs['trackstack']['pop']();$pyjs['trackstack']['push']($pyjs['track']);
		$pyjs['track']['lineno']=18;
		$m['NV_MAGICCONST'] = (typeof ($div1=(typeof ($mul1=$constant_int_4)==typeof ($mul2=$m['_exp']((typeof ($usub1=0.5)=='number'?
			-$usub1:
			$p['op_usub']($usub1)))) && typeof $mul1=='number'?
			$mul1*$mul2:
			$p['op_mul']($mul1,$mul2)))==typeof ($div2=$m['_sqrt'](2.0)) && typeof $div1=='number' && $div2 !== 0?
			$div1/$div2:
			$p['op_div']($div1,$div2));
		$pyjs['track']['lineno']=19;
		$m['TWOPI'] = (typeof ($mul3=2.0)==typeof ($mul4=$m['_pi']) && typeof $mul3=='number'?
			$mul3*$mul4:
			$p['op_mul']($mul3,$mul4));
		$pyjs['track']['lineno']=20;
		$m['LOG4'] = $m['_log'](4.0);
		$pyjs['track']['lineno']=21;
		$m['SG_MAGICCONST'] = $p['__op_add']($add1=1.0,$add2=$m['_log'](4.5));
		$pyjs['track']['lineno']=22;
		$m['BPF'] = $constant_int_53;
		$pyjs['track']['lineno']=23;
		$m['RECIP_BPF'] = (typeof ($pow1=$constant_int_2)==typeof ($pow2=(typeof ($usub2=$m['BPF'])=='number'?
			-$usub2:
			$p['op_usub']($usub2))) && typeof $pow1=='number'?
			Math['pow']($pow1,$pow2):
			$p['op_pow']($pow1,$pow2));
		$pyjs['track']['lineno']=30;
		$pyjs['track']={'module':$pyjs['track']['module'],'lineno':$pyjs['track']['lineno']};$pyjs['trackstack']['push']($pyjs['track']);
		$m['_random'] = $p['___import___']('_random', null);
		$pyjs['trackstack']['pop']();$pyjs['track']=$pyjs['trackstack']['pop']();$pyjs['trackstack']['push']($pyjs['track']);
		$pyjs['track']['lineno']=32;
		$m['Random'] = (function(){
			var $cls_definition = new Object();
			var $method;
			$cls_definition['__module__'] = 'random';
			$cls_definition['__md5__'] = 'cbedf2a898d887ac63f7887a8023045f';
			$pyjs['track']['lineno']=33;
			$cls_definition['VERSION'] = $constant_int_3;
			$pyjs['track']['lineno']=35;
			$method = $pyjs__bind_method2('__init__', function(x) {
				if (this['__is_instance__'] === true) {
					var self = this;
					if ($pyjs['options']['arg_count'] && (arguments['length'] < 0 || arguments['length'] > 1)) $pyjs__exception_func_param(arguments['callee']['__name__'], 1, 2, arguments['length']+1);
				} else {
					var self = arguments[0];
					x = arguments[1];
					if ($pyjs['options']['arg_is_instance'] && self['__is_instance__'] !== true) $pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
					if ($pyjs['options']['arg_count'] && (arguments['length'] < 1 || arguments['length'] > 2)) $pyjs__exception_func_param(arguments['callee']['__name__'], 1, 2, arguments['length']);
				}
				if ($pyjs['options']['arg_instance_type']) {
					if (self.prototype['__md5__'] !== 'cbedf2a898d887ac63f7887a8023045f') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}
				if (typeof x == 'undefined') x=arguments['callee']['__args__'][3][1];

				$pyjs['track']={'module':'random', 'lineno':35};$pyjs['trackstack']['push']($pyjs['track']);
				$pyjs['track']['module']='random';
				$pyjs['track']['lineno']=35;
				$pyjs['track']['lineno']=36;
				self['seed'](x);
				$pyjs['track']['lineno']=37;
				self['__is_instance__'] && typeof self['__setattr__'] == 'function' ? self['__setattr__']('gauss_next', null) : $p['setattr'](self, 'gauss_next', null); 
				$pyjs['trackstack']['pop']();$pyjs['track']=$pyjs['trackstack']['pop']();$pyjs['trackstack']['push']($pyjs['track']);
				return null;
			}
	, 1, [null,null,['self'],['x', null]]);
			$cls_definition['__init__'] = $method;
			$pyjs['track']['lineno']=39;
			$method = $pyjs__bind_method2('seed', function(a) {
				if (this['__is_instance__'] === true) {
					var self = this;
					if ($pyjs['options']['arg_count'] && (arguments['length'] < 0 || arguments['length'] > 1)) $pyjs__exception_func_param(arguments['callee']['__name__'], 1, 2, arguments['length']+1);
				} else {
					var self = arguments[0];
					a = arguments[1];
					if ($pyjs['options']['arg_is_instance'] && self['__is_instance__'] !== true) $pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
					if ($pyjs['options']['arg_count'] && (arguments['length'] < 1 || arguments['length'] > 2)) $pyjs__exception_func_param(arguments['callee']['__name__'], 1, 2, arguments['length']);
				}
				if ($pyjs['options']['arg_instance_type']) {
					if (self.prototype['__md5__'] !== 'cbedf2a898d887ac63f7887a8023045f') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}
				if (typeof a == 'undefined') a=arguments['callee']['__args__'][3][1];
				var $pyjs_try_err,time,$mul6,$mul5;
				$pyjs['track']={'module':'random', 'lineno':39};$pyjs['trackstack']['push']($pyjs['track']);
				$pyjs['track']['module']='random';
				$pyjs['track']['lineno']=39;
				$pyjs['track']['lineno']=46;
				if ($p['bool']($p['op_is'](a, null))) {
					$pyjs['track']['lineno']=47;
					var $pyjs__trackstack_size_1 = $pyjs['trackstack']['length'];
					try {
						$pyjs['track']['lineno']=48;
						a = $p['long']($m['_hexlify']($m['_urandom']($constant_int_16)), $constant_int_16);
					} catch($pyjs_try_err) {
						$pyjs['__last_exception_stack__'] = sys['save_exception_stack']($pyjs__trackstack_size_1 - 1);
						$pyjs['__active_exception_stack__'] = null;
						$pyjs_try_err = $p['_errorMapping']($pyjs_try_err);
						var $pyjs_try_err_name = (typeof $pyjs_try_err['__name__'] == 'undefined' ? $pyjs_try_err['name'] : $pyjs_try_err['__name__'] );
						$pyjs['__last_exception__'] = {'error': $pyjs_try_err, 'module': $m};
						if ($pyjs['trackstack']['length'] > $pyjs__trackstack_size_1) {
							$pyjs['trackstack'] = $pyjs['trackstack']['slice'](0,$pyjs__trackstack_size_1);
							$pyjs['track'] = $pyjs['trackstack']['slice'](-1)[0];
						}
						$pyjs['track']['module']='random';
						if (($pyjs_try_err_name == $p['NotImplementedError']['__name__'])||$p['_isinstance']($pyjs_try_err,$p['NotImplementedError'])) {
							$pyjs['track']['lineno']=50;
							$pyjs['track']={'module':$pyjs['track']['module'],'lineno':$pyjs['track']['lineno']};$pyjs['trackstack']['push']($pyjs['track']);
							time = $p['___import___']('time', null);
							$pyjs['trackstack']['pop']();$pyjs['track']=$pyjs['trackstack']['pop']();$pyjs['trackstack']['push']($pyjs['track']);
							$pyjs['track']['lineno']=51;
							a = $p['long']((typeof ($mul5=time['time']())==typeof ($mul6=$constant_int_256) && typeof $mul5=='number'?
								$mul5*$mul6:
								$p['op_mul']($mul5,$mul6)));
						} else { $pyjs['__active_exception_stack__'] = $pyjs['__last_exception_stack__']; $pyjs['__last_exception_stack__'] = null; throw $pyjs_try_err; }
					}
				}
				$pyjs['track']['lineno']=53;
				$p['$$super']($m['Random'], self)['seed'](a);
				$pyjs['track']['lineno']=54;
				self['__is_instance__'] && typeof self['__setattr__'] == 'function' ? self['__setattr__']('gauss_next', null) : $p['setattr'](self, 'gauss_next', null); 
				$pyjs['trackstack']['pop']();$pyjs['track']=$pyjs['trackstack']['pop']();$pyjs['trackstack']['push']($pyjs['track']);
				return null;
			}
	, 1, [null,null,['self'],['a', null]]);
			$cls_definition['seed'] = $method;
			$pyjs['track']['lineno']=56;
			$method = $pyjs__bind_method2('getstate', function() {
				if (this['__is_instance__'] === true) {
					var self = this;
					if ($pyjs['options']['arg_count'] && arguments['length'] != 0) $pyjs__exception_func_param(arguments['callee']['__name__'], 1, 1, arguments['length']+1);
				} else {
					var self = arguments[0];
					if ($pyjs['options']['arg_is_instance'] && self['__is_instance__'] !== true) $pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
					if ($pyjs['options']['arg_count'] && arguments['length'] != 1) $pyjs__exception_func_param(arguments['callee']['__name__'], 1, 1, arguments['length']);
				}
				if ($pyjs['options']['arg_instance_type']) {
					if (self.prototype['__md5__'] !== 'cbedf2a898d887ac63f7887a8023045f') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}

				$pyjs['track']={'module':'random', 'lineno':56};$pyjs['trackstack']['push']($pyjs['track']);
				$pyjs['track']['module']='random';
				$pyjs['track']['lineno']=56;
				$pyjs['track']['lineno']=58;
				$pyjs['track']['lineno']=58;
				var $pyjs__ret = $p['tuple']([$p['getattr'](self, 'VERSION'), $p['$$super']($m['Random'], self)['getstate'](), $p['getattr'](self, 'gauss_next')]);
				$pyjs['trackstack']['pop']();$pyjs['track']=$pyjs['trackstack']['pop']();$pyjs['trackstack']['push']($pyjs['track']);
				return $pyjs__ret;
			}
	, 1, [null,null,['self']]);
			$cls_definition['getstate'] = $method;
			$pyjs['track']['lineno']=60;
			$method = $pyjs__bind_method2('setstate', function(state) {
				if (this['__is_instance__'] === true) {
					var self = this;
					if ($pyjs['options']['arg_count'] && arguments['length'] != 1) $pyjs__exception_func_param(arguments['callee']['__name__'], 2, 2, arguments['length']+1);
				} else {
					var self = arguments[0];
					state = arguments[1];
					if ($pyjs['options']['arg_is_instance'] && self['__is_instance__'] !== true) $pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
					if ($pyjs['options']['arg_count'] && arguments['length'] != 2) $pyjs__exception_func_param(arguments['callee']['__name__'], 2, 2, arguments['length']);
				}
				if ($pyjs['options']['arg_instance_type']) {
					if (self.prototype['__md5__'] !== 'cbedf2a898d887ac63f7887a8023045f') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}
				var $pow3,$iter1_nextval,$iter1_type,$pow4,$pyjs_try_err,$iter1_iter,version,$mod1,$iter1_array,$mod2,x,internalstate,e,$iter1_idx;
				$pyjs['track']={'module':'random', 'lineno':60};$pyjs['trackstack']['push']($pyjs['track']);
				$pyjs['track']['module']='random';
				$pyjs['track']['lineno']=60;
				$pyjs['track']['lineno']=62;
				version = state['__getitem__']($constant_int_0);
				$pyjs['track']['lineno']=63;
				if ($p['bool']($p['op_eq'](version, $constant_int_3))) {
					$pyjs['track']['lineno']=64;
					var $tupleassign1 = $p['__ass_unpack'](state, 3, null);
					version = $tupleassign1[0];
					internalstate = $tupleassign1[1];
					self['__is_instance__'] && typeof self['__setattr__'] == 'function' ? self['__setattr__']('gauss_next', $tupleassign1[2]) : $p['setattr'](self, 'gauss_next', $tupleassign1[2]); 
					$pyjs['track']['lineno']=65;
					$p['$$super']($m['Random'], self)['setstate'](internalstate);
				}
				else if ($p['bool']($p['op_eq'](version, $constant_int_2))) {
					$pyjs['track']['lineno']=67;
					var $tupleassign2 = $p['__ass_unpack'](state, 3, null);
					version = $tupleassign2[0];
					internalstate = $tupleassign2[1];
					self['__is_instance__'] && typeof self['__setattr__'] == 'function' ? self['__setattr__']('gauss_next', $tupleassign2[2]) : $p['setattr'](self, 'gauss_next', $tupleassign2[2]); 
					$pyjs['track']['lineno']=72;
					var $pyjs__trackstack_size_1 = $pyjs['trackstack']['length'];
					try {
						$pyjs['track']['lineno']=73;
						internalstate = $p['tuple'](function(){
var $generator_state = [0], $generator_exc = [null], $yield_value = null, $exc = null, $is_executing=false;
							var $generator = function () {};
							$generator['next'] = function (noStop) {
							
								var $res;
								$yield_value = $exc = null;
								try {
									$res = $generator['$genfunc']();
									$is_executing=false;
									if (typeof $res == 'undefined') {
										if (noStop === true) {
											$generator_state[0] = -1;
											return;
										}
										throw $p['StopIteration']();
									}
								} catch (e) {
							
									$is_executing=false;
									$generator_state[0] = -1;
									if (noStop === true && $p['isinstance'](e, $p['StopIteration'])) {
										return;
									}
									throw e;
								}
								return $res;
							};
							$generator['__iter__'] = function () {return $generator;};
							$generator['send'] = function ($val) {
							
								$yield_value = $val;
								$exc = null;
								try {
									var $res = $generator['$genfunc']();
									if (typeof $res == 'undefined') throw $p['StopIteration']();
								} catch (e) {
							
									$generator_state[0] = -1;
									$is_executing=false;
									throw e;
								}
								$is_executing=false;
								return $res;
							};
							$generator['$$throw'] = function ($exc_type, $exc_value) {
							
								$yield_value = null;
								$exc=(typeof $exc_value == 'undefined' ? $exc_type() :
																		($p['isinstance']($exc_value, $exc_type)
																		 ? $exc_value : $exc_type($exc_value)));
								try {
									var $res = $generator['$genfunc']();
								} catch (e) {
							
									$generator_state[0] = -1;
									$is_executing=false;
									throw (e);
								}
								$is_executing=false;
								return $res;
							};
							$generator['close'] = function () {
							
								$yield_value = null;
								$exc=$p['GeneratorExit']();
								try {
									var $res = $generator['$genfunc']();
									$is_executing=false;
									if (typeof $res != 'undefined') throw $p['RuntimeError']('generator ignored GeneratorExit');
								} catch (e) {
							
									$generator_state[0] = -1;
									$is_executing=false;
									if ($p['isinstance'](e, $p['StopIteration']) || $p['isinstance'](e, $p['GeneratorExit'])) return null;
									throw (e);
								}
								return null;
							};
							$generator['$genfunc'] = function () {
								var $yielding = false;
								if ($is_executing) throw $p['ValueError']('generator already executing');
								$is_executing = true;
							
							if (typeof $generator_state[0] == 'undefined' || $generator_state[0] === 0) {
								for (var $i = 0 ; $i < ($generator_state['length']<2?2:$generator_state['length']); $i++) $generator_state[$i]=0;
								if (typeof $exc != 'undefined' && $exc !== null) {
									$yielding = null;
									$generator_state[0] = -1;
									throw $exc;
								}
								$iter1_iter = internalstate;
								$iter1_nextval=$p['__iter_prepare']($iter1_iter,false);
								$generator_state[0]=1;
							}
							if ($generator_state[0] == 1) {
								$generator_state[1] = 0;
								$generator_state[0]=2;
							}
							if ($generator_state[0] == 2) {
								for (;($generator_state[1] > 0 || typeof($p['__wrapped_next']($iter1_nextval)['$nextval']) != 'undefined');$generator_state[1] = 0) {
									if (typeof $generator_state[1] == 'undefined' || $generator_state[1] === 0) {
										for (var $i = 1 ; $i < ($generator_state['length']<3?3:$generator_state['length']); $i++) $generator_state[$i]=0;
										x = $iter1_nextval['$nextval'];
										$yield_value = (typeof ($mod1=$p['long'](x))==typeof ($mod2=(typeof ($pow3=$constant_int_2)==typeof ($pow4=$constant_int_32) && typeof $pow3=='number'?
											Math['pow']($pow3,$pow4):
											$p['op_pow']($pow3,$pow4))) && typeof $mod1=='number'?
											(($mod1=$mod1%$mod2)<0&&$mod2>0?$mod1+$mod2:$mod1):
											$p['op_mod']($mod1,$mod2));
										$yielding = true;
										$generator_state[1] = 1;
										return $yield_value;
										$generator_state[1]=1;
									}
									if ($generator_state[1] == 1) {
										if (typeof $exc != 'undefined' && $exc !== null) {
											$yielding = null;
											$generator_state[1] = -1;
											throw $exc;
										}
										$generator_state[1]=2;
									}
									if ($generator_state[1] == 2) {
									}
								}
								$generator_state[0]=3;
							}
							if ($generator_state[0] == 3) {
								$generator_state[0]=4;
							}
							if ($generator_state[0] == 4) {
							}

								return;
							};
							return $generator;
						}()
);
					} catch($pyjs_try_err) {
						$pyjs['__last_exception_stack__'] = sys['save_exception_stack']($pyjs__trackstack_size_1 - 1);
						$pyjs['__active_exception_stack__'] = null;
						$pyjs_try_err = $p['_errorMapping']($pyjs_try_err);
						var $pyjs_try_err_name = (typeof $pyjs_try_err['__name__'] == 'undefined' ? $pyjs_try_err['name'] : $pyjs_try_err['__name__'] );
						$pyjs['__last_exception__'] = {'error': $pyjs_try_err, 'module': $m};
						if ($pyjs['trackstack']['length'] > $pyjs__trackstack_size_1) {
							$pyjs['trackstack'] = $pyjs['trackstack']['slice'](0,$pyjs__trackstack_size_1);
							$pyjs['track'] = $pyjs['trackstack']['slice'](-1)[0];
						}
						$pyjs['track']['module']='random';
						if (($pyjs_try_err_name == $p['ValueError']['__name__'])||$p['_isinstance']($pyjs_try_err,$p['ValueError'])) {
							e = $pyjs_try_err;
							$pyjs['track']['lineno']=75;
							$pyjs['__active_exception_stack__'] = null;

							var $pyjs__raise_expr1 = $p['TypeError'];
							var $pyjs__raise_expr2 = e;
							if ($pyjs__raise_expr2 !== null && $pyjs__raise_expr1['__is_instance__'] === true) {
								throw $p['TypeError']('instance exception may not have a separate value');
							}
							if ($p['isinstance']($pyjs__raise_expr2, $p['tuple'])) {
								throw ($pyjs__raise_expr1['apply']($pyjs__raise_expr1, $pyjs__raise_expr2['getArray']()));
							} else {
								throw ($pyjs__raise_expr1($pyjs__raise_expr2));
							}

						} else { $pyjs['__active_exception_stack__'] = $pyjs['__last_exception_stack__']; $pyjs['__last_exception_stack__'] = null; throw $pyjs_try_err; }
					}
					$pyjs['track']['lineno']=76;
					$p['$$super']($m['Random'], self)['setstate'](internalstate);
				}
				else {
					$pyjs['track']['lineno']=78;
					$pyjs['__active_exception_stack__'] = null;
					throw ($p['ValueError']($p['sprintf']('state with version %s passed to Random.setstate() of version %s', $p['tuple']([version, $p['getattr'](self, 'VERSION')]))));
				}
				$pyjs['trackstack']['pop']();$pyjs['track']=$pyjs['trackstack']['pop']();$pyjs['trackstack']['push']($pyjs['track']);
				return null;
			}
	, 1, [null,null,['self'],['state']]);
			$cls_definition['setstate'] = $method;
			$pyjs['track']['lineno']=87;
			$method = $pyjs__bind_method2('__getstate__', function() {
				if (this['__is_instance__'] === true) {
					var self = this;
					if ($pyjs['options']['arg_count'] && arguments['length'] != 0) $pyjs__exception_func_param(arguments['callee']['__name__'], 1, 1, arguments['length']+1);
				} else {
					var self = arguments[0];
					if ($pyjs['options']['arg_is_instance'] && self['__is_instance__'] !== true) $pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
					if ($pyjs['options']['arg_count'] && arguments['length'] != 1) $pyjs__exception_func_param(arguments['callee']['__name__'], 1, 1, arguments['length']);
				}
				if ($pyjs['options']['arg_instance_type']) {
					if (self.prototype['__md5__'] !== 'cbedf2a898d887ac63f7887a8023045f') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}

				$pyjs['track']={'module':'random', 'lineno':87};$pyjs['trackstack']['push']($pyjs['track']);
				$pyjs['track']['module']='random';
				$pyjs['track']['lineno']=87;
				$pyjs['track']['lineno']=88;
				$pyjs['track']['lineno']=88;
				var $pyjs__ret = self['getstate']();
				$pyjs['trackstack']['pop']();$pyjs['track']=$pyjs['trackstack']['pop']();$pyjs['trackstack']['push']($pyjs['track']);
				return $pyjs__ret;
			}
	, 1, [null,null,['self']]);
			$cls_definition['__getstate__'] = $method;
			$pyjs['track']['lineno']=90;
			$method = $pyjs__bind_method2('__setstate__', function(state) {
				if (this['__is_instance__'] === true) {
					var self = this;
					if ($pyjs['options']['arg_count'] && arguments['length'] != 1) $pyjs__exception_func_param(arguments['callee']['__name__'], 2, 2, arguments['length']+1);
				} else {
					var self = arguments[0];
					state = arguments[1];
					if ($pyjs['options']['arg_is_instance'] && self['__is_instance__'] !== true) $pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
					if ($pyjs['options']['arg_count'] && arguments['length'] != 2) $pyjs__exception_func_param(arguments['callee']['__name__'], 2, 2, arguments['length']);
				}
				if ($pyjs['options']['arg_instance_type']) {
					if (self.prototype['__md5__'] !== 'cbedf2a898d887ac63f7887a8023045f') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}

				$pyjs['track']={'module':'random', 'lineno':90};$pyjs['trackstack']['push']($pyjs['track']);
				$pyjs['track']['module']='random';
				$pyjs['track']['lineno']=90;
				$pyjs['track']['lineno']=91;
				self['setstate'](state);
				$pyjs['trackstack']['pop']();$pyjs['track']=$pyjs['trackstack']['pop']();$pyjs['trackstack']['push']($pyjs['track']);
				return null;
			}
	, 1, [null,null,['self'],['state']]);
			$cls_definition['__setstate__'] = $method;
			$pyjs['track']['lineno']=93;
			$method = $pyjs__bind_method2('__reduce__', function() {
				if (this['__is_instance__'] === true) {
					var self = this;
					if ($pyjs['options']['arg_count'] && arguments['length'] != 0) $pyjs__exception_func_param(arguments['callee']['__name__'], 1, 1, arguments['length']+1);
				} else {
					var self = arguments[0];
					if ($pyjs['options']['arg_is_instance'] && self['__is_instance__'] !== true) $pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
					if ($pyjs['options']['arg_count'] && arguments['length'] != 1) $pyjs__exception_func_param(arguments['callee']['__name__'], 1, 1, arguments['length']);
				}
				if ($pyjs['options']['arg_instance_type']) {
					if (self.prototype['__md5__'] !== 'cbedf2a898d887ac63f7887a8023045f') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}

				$pyjs['track']={'module':'random', 'lineno':93};$pyjs['trackstack']['push']($pyjs['track']);
				$pyjs['track']['module']='random';
				$pyjs['track']['lineno']=93;
				$pyjs['track']['lineno']=94;
				$pyjs['track']['lineno']=94;
				var $pyjs__ret = $p['tuple']([$p['getattr'](self, '__class__'), $p['tuple']([]), self['getstate']()]);
				$pyjs['trackstack']['pop']();$pyjs['track']=$pyjs['trackstack']['pop']();$pyjs['trackstack']['push']($pyjs['track']);
				return $pyjs__ret;
			}
	, 1, [null,null,['self']]);
			$cls_definition['__reduce__'] = $method;
			$pyjs['track']['lineno']=98;
			$method = $pyjs__bind_method2('randrange', function(start, stop, step, fint, $$default, maxwidth) {
				if (this['__is_instance__'] === true) {
					var self = this;
					if ($pyjs['options']['arg_count'] && (arguments['length'] < 1 || arguments['length'] > 6)) $pyjs__exception_func_param(arguments['callee']['__name__'], 2, 7, arguments['length']+1);
				} else {
					var self = arguments[0];
					start = arguments[1];
					stop = arguments[2];
					step = arguments[3];
					fint = arguments[4];
					$$default = arguments[5];
					maxwidth = arguments[6];
					if ($pyjs['options']['arg_is_instance'] && self['__is_instance__'] !== true) $pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
					if ($pyjs['options']['arg_count'] && (arguments['length'] < 2 || arguments['length'] > 7)) $pyjs__exception_func_param(arguments['callee']['__name__'], 2, 7, arguments['length']);
				}
				if ($pyjs['options']['arg_instance_type']) {
					if (self.prototype['__md5__'] !== 'cbedf2a898d887ac63f7887a8023045f') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}
				if (typeof stop == 'undefined') stop=arguments['callee']['__args__'][4][1];
				if (typeof step == 'undefined') step=arguments['callee']['__args__'][5][1];
				if (typeof fint == 'undefined') fint=arguments['callee']['__args__'][6][1];
				if (typeof $$default == 'undefined') $$default=arguments['callee']['__args__'][7][1];
				if (typeof maxwidth == 'undefined') maxwidth=arguments['callee']['__args__'][8][1];
				var istep,$add13,$add12,istart,width,$floordiv4,istop,$sub3,$sub2,$sub1,$sub4,$floordiv1,$and1,$and2,$add14,$add15,$add10,$add11,$mul9,$mul8,$mul7,$mul12,$mul16,$mul15,$mul14,$mul13,$mul11,$floordiv3,$mul10,$$default,$add16,n,$add3,$floordiv2,$add6,$add7,$add4,$add5,$add8,$add9;
				$pyjs['track']={'module':'random', 'lineno':98};$pyjs['trackstack']['push']($pyjs['track']);
				$pyjs['track']['module']='random';
				$pyjs['track']['lineno']=98;
				$pyjs['track']['lineno']=108;
				istart = fint(start);
				$pyjs['track']['lineno']=109;
				if ($p['bool'](!$p['op_eq'](istart, start))) {
					$pyjs['track']['lineno']=110;
					$pyjs['__active_exception_stack__'] = null;

					var $pyjs__raise_expr1 = $p['ValueError'];
					var $pyjs__raise_expr2 = 'non-integer arg 1 for randrange()';
					if ($pyjs__raise_expr2 !== null && $pyjs__raise_expr1['__is_instance__'] === true) {
						throw $p['TypeError']('instance exception may not have a separate value');
					}
					if ($p['isinstance']($pyjs__raise_expr2, $p['tuple'])) {
						throw ($pyjs__raise_expr1['apply']($pyjs__raise_expr1, $pyjs__raise_expr2['getArray']()));
					} else {
						throw ($pyjs__raise_expr1($pyjs__raise_expr2));
					}

				}
				$pyjs['track']['lineno']=111;
				if ($p['bool']($p['op_is'](stop, $$default))) {
					$pyjs['track']['lineno']=112;
					if ($p['bool'](($p['cmp'](istart, $constant_int_0) == 1))) {
						$pyjs['track']['lineno']=113;
						if ($p['bool'](((($p['cmp'](istart, maxwidth))|1) == 1))) {
							$pyjs['track']['lineno']=114;
							$pyjs['track']['lineno']=114;
							var $pyjs__ret = self['_randbelow'](istart);
							$pyjs['trackstack']['pop']();$pyjs['track']=$pyjs['trackstack']['pop']();$pyjs['trackstack']['push']($pyjs['track']);
							return $pyjs__ret;
						}
						$pyjs['track']['lineno']=115;
						$pyjs['track']['lineno']=115;
						var $pyjs__ret = fint((typeof ($mul7=self['random']())==typeof ($mul8=istart) && typeof $mul7=='number'?
							$mul7*$mul8:
							$p['op_mul']($mul7,$mul8)));
						$pyjs['trackstack']['pop']();$pyjs['track']=$pyjs['trackstack']['pop']();$pyjs['trackstack']['push']($pyjs['track']);
						return $pyjs__ret;
					}
					$pyjs['track']['lineno']=116;
					$pyjs['__active_exception_stack__'] = null;

					var $pyjs__raise_expr1 = $p['ValueError'];
					var $pyjs__raise_expr2 = 'empty range for randrange()';
					if ($pyjs__raise_expr2 !== null && $pyjs__raise_expr1['__is_instance__'] === true) {
						throw $p['TypeError']('instance exception may not have a separate value');
					}
					if ($p['isinstance']($pyjs__raise_expr2, $p['tuple'])) {
						throw ($pyjs__raise_expr1['apply']($pyjs__raise_expr1, $pyjs__raise_expr2['getArray']()));
					} else {
						throw ($pyjs__raise_expr1($pyjs__raise_expr2));
					}

				}
				$pyjs['track']['lineno']=119;
				istop = fint(stop);
				$pyjs['track']['lineno']=120;
				if ($p['bool'](!$p['op_eq'](istop, stop))) {
					$pyjs['track']['lineno']=121;
					$pyjs['__active_exception_stack__'] = null;

					var $pyjs__raise_expr1 = $p['ValueError'];
					var $pyjs__raise_expr2 = 'non-integer stop for randrange()';
					if ($pyjs__raise_expr2 !== null && $pyjs__raise_expr1['__is_instance__'] === true) {
						throw $p['TypeError']('instance exception may not have a separate value');
					}
					if ($p['isinstance']($pyjs__raise_expr2, $p['tuple'])) {
						throw ($pyjs__raise_expr1['apply']($pyjs__raise_expr1, $pyjs__raise_expr2['getArray']()));
					} else {
						throw ($pyjs__raise_expr1($pyjs__raise_expr2));
					}

				}
				$pyjs['track']['lineno']=122;
				width = $p['__op_sub']($sub1=istop,$sub2=istart);
				$pyjs['track']['lineno']=123;
				if ($p['bool'](($p['bool']($and1=$p['op_eq'](step, $constant_int_1))?($p['cmp'](width, $constant_int_0) == 1):$and1))) {
					$pyjs['track']['lineno']=137;
					if ($p['bool'](((($p['cmp'](width, maxwidth))|1) == 1))) {
						$pyjs['track']['lineno']=138;
						$pyjs['track']['lineno']=138;
						var $pyjs__ret = fint($p['__op_add']($add3=istart,$add4=self['_randbelow'](width)));
						$pyjs['trackstack']['pop']();$pyjs['track']=$pyjs['trackstack']['pop']();$pyjs['trackstack']['push']($pyjs['track']);
						return $pyjs__ret;
					}
					$pyjs['track']['lineno']=139;
					$pyjs['track']['lineno']=139;
					var $pyjs__ret = fint($p['__op_add']($add5=istart,$add6=fint((typeof ($mul9=self['random']())==typeof ($mul10=width) && typeof $mul9=='number'?
						$mul9*$mul10:
						$p['op_mul']($mul9,$mul10)))));
					$pyjs['trackstack']['pop']();$pyjs['track']=$pyjs['trackstack']['pop']();$pyjs['trackstack']['push']($pyjs['track']);
					return $pyjs__ret;
				}
				$pyjs['track']['lineno']=140;
				if ($p['bool']($p['op_eq'](step, $constant_int_1))) {
					$pyjs['track']['lineno']=141;
					$pyjs['__active_exception_stack__'] = null;

					var $pyjs__raise_expr1 = $p['ValueError'];
					var $pyjs__raise_expr2 = $p['sprintf']('empty range for randrange() (%d,%d, %d)', $p['tuple']([istart, istop, width]));
					if ($pyjs__raise_expr2 !== null && $pyjs__raise_expr1['__is_instance__'] === true) {
						throw $p['TypeError']('instance exception may not have a separate value');
					}
					if ($p['isinstance']($pyjs__raise_expr2, $p['tuple'])) {
						throw ($pyjs__raise_expr1['apply']($pyjs__raise_expr1, $pyjs__raise_expr2['getArray']()));
					} else {
						throw ($pyjs__raise_expr1($pyjs__raise_expr2));
					}

				}
				$pyjs['track']['lineno']=144;
				istep = fint(step);
				$pyjs['track']['lineno']=145;
				if ($p['bool'](!$p['op_eq'](istep, step))) {
					$pyjs['track']['lineno']=146;
					$pyjs['__active_exception_stack__'] = null;

					var $pyjs__raise_expr1 = $p['ValueError'];
					var $pyjs__raise_expr2 = 'non-integer step for randrange()';
					if ($pyjs__raise_expr2 !== null && $pyjs__raise_expr1['__is_instance__'] === true) {
						throw $p['TypeError']('instance exception may not have a separate value');
					}
					if ($p['isinstance']($pyjs__raise_expr2, $p['tuple'])) {
						throw ($pyjs__raise_expr1['apply']($pyjs__raise_expr1, $pyjs__raise_expr2['getArray']()));
					} else {
						throw ($pyjs__raise_expr1($pyjs__raise_expr2));
					}

				}
				$pyjs['track']['lineno']=147;
				if ($p['bool'](($p['cmp'](istep, $constant_int_0) == 1))) {
					$pyjs['track']['lineno']=148;
					n = (typeof ($floordiv1=$p['__op_sub']($sub3=$p['__op_add']($add7=width,$add8=istep),$sub4=$constant_int_1))==typeof ($floordiv2=istep) && typeof $floordiv1=='number' && $floordiv2 !== 0?
						Math['floor']($floordiv1/$floordiv2):
						$p['op_floordiv']($floordiv1,$floordiv2));
				}
				else if ($p['bool'](($p['cmp'](istep, $constant_int_0) == -1))) {
					$pyjs['track']['lineno']=150;
					n = (typeof ($floordiv3=$p['__op_add']($add11=$p['__op_add']($add9=width,$add10=istep),$add12=$constant_int_1))==typeof ($floordiv4=istep) && typeof $floordiv3=='number' && $floordiv4 !== 0?
						Math['floor']($floordiv3/$floordiv4):
						$p['op_floordiv']($floordiv3,$floordiv4));
				}
				else {
					$pyjs['track']['lineno']=152;
					$pyjs['__active_exception_stack__'] = null;

					var $pyjs__raise_expr1 = $p['ValueError'];
					var $pyjs__raise_expr2 = 'zero step for randrange()';
					if ($pyjs__raise_expr2 !== null && $pyjs__raise_expr1['__is_instance__'] === true) {
						throw $p['TypeError']('instance exception may not have a separate value');
					}
					if ($p['isinstance']($pyjs__raise_expr2, $p['tuple'])) {
						throw ($pyjs__raise_expr1['apply']($pyjs__raise_expr1, $pyjs__raise_expr2['getArray']()));
					} else {
						throw ($pyjs__raise_expr1($pyjs__raise_expr2));
					}

				}
				$pyjs['track']['lineno']=154;
				if ($p['bool'](($p['cmp'](n, $constant_int_0) < 1))) {
					$pyjs['track']['lineno']=155;
					$pyjs['__active_exception_stack__'] = null;

					var $pyjs__raise_expr1 = $p['ValueError'];
					var $pyjs__raise_expr2 = 'empty range for randrange()';
					if ($pyjs__raise_expr2 !== null && $pyjs__raise_expr1['__is_instance__'] === true) {
						throw $p['TypeError']('instance exception may not have a separate value');
					}
					if ($p['isinstance']($pyjs__raise_expr2, $p['tuple'])) {
						throw ($pyjs__raise_expr1['apply']($pyjs__raise_expr1, $pyjs__raise_expr2['getArray']()));
					} else {
						throw ($pyjs__raise_expr1($pyjs__raise_expr2));
					}

				}
				$pyjs['track']['lineno']=157;
				if ($p['bool'](((($p['cmp'](n, maxwidth))|1) == 1))) {
					$pyjs['track']['lineno']=158;
					$pyjs['track']['lineno']=158;
					var $pyjs__ret = $p['__op_add']($add13=istart,$add14=(typeof ($mul11=istep)==typeof ($mul12=self['_randbelow'](n)) && typeof $mul11=='number'?
						$mul11*$mul12:
						$p['op_mul']($mul11,$mul12)));
					$pyjs['trackstack']['pop']();$pyjs['track']=$pyjs['trackstack']['pop']();$pyjs['trackstack']['push']($pyjs['track']);
					return $pyjs__ret;
				}
				$pyjs['track']['lineno']=159;
				$pyjs['track']['lineno']=159;
				var $pyjs__ret = $p['__op_add']($add15=istart,$add16=(typeof ($mul15=istep)==typeof ($mul16=fint((typeof ($mul13=self['random']())==typeof ($mul14=n) && typeof $mul13=='number'?
					$mul13*$mul14:
					$p['op_mul']($mul13,$mul14)))) && typeof $mul15=='number'?
					$mul15*$mul16:
					$p['op_mul']($mul15,$mul16)));
				$pyjs['trackstack']['pop']();$pyjs['track']=$pyjs['trackstack']['pop']();$pyjs['trackstack']['push']($pyjs['track']);
				return $pyjs__ret;
			}
	, 1, [null,null,['self'],['start'],['stop', null],['step', $constant_int_1],['fint', $p['int']],['$$default', null],['maxwidth', $p['op_bitshiftleft']($constant_long_1,$m['BPF'])]]);
			$cls_definition['randrange'] = $method;
			$pyjs['track']['lineno']=161;
			$method = $pyjs__bind_method2('randint', function(a, b) {
				if (this['__is_instance__'] === true) {
					var self = this;
					if ($pyjs['options']['arg_count'] && arguments['length'] != 2) $pyjs__exception_func_param(arguments['callee']['__name__'], 3, 3, arguments['length']+1);
				} else {
					var self = arguments[0];
					a = arguments[1];
					b = arguments[2];
					if ($pyjs['options']['arg_is_instance'] && self['__is_instance__'] !== true) $pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
					if ($pyjs['options']['arg_count'] && arguments['length'] != 3) $pyjs__exception_func_param(arguments['callee']['__name__'], 3, 3, arguments['length']);
				}
				if ($pyjs['options']['arg_instance_type']) {
					if (self.prototype['__md5__'] !== 'cbedf2a898d887ac63f7887a8023045f') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}
				var $add18,$add17;
				$pyjs['track']={'module':'random', 'lineno':161};$pyjs['trackstack']['push']($pyjs['track']);
				$pyjs['track']['module']='random';
				$pyjs['track']['lineno']=161;
				$pyjs['track']['lineno']=165;
				$pyjs['track']['lineno']=165;
				var $pyjs__ret = self['randrange'](a, $p['__op_add']($add17=b,$add18=$constant_int_1));
				$pyjs['trackstack']['pop']();$pyjs['track']=$pyjs['trackstack']['pop']();$pyjs['trackstack']['push']($pyjs['track']);
				return $pyjs__ret;
			}
	, 1, [null,null,['self'],['a'],['b']]);
			$cls_definition['randint'] = $method;
			$pyjs['track']['lineno']=167;
			$method = $pyjs__bind_method2('_randbelow', function(n, _log, fint, _maxwidth) {
				if (this['__is_instance__'] === true) {
					var self = this;
					if ($pyjs['options']['arg_count'] && (arguments['length'] < 1 || arguments['length'] > 4)) $pyjs__exception_func_param(arguments['callee']['__name__'], 2, 5, arguments['length']+1);
				} else {
					var self = arguments[0];
					n = arguments[1];
					_log = arguments[2];
					fint = arguments[3];
					_maxwidth = arguments[4];
					if ($pyjs['options']['arg_is_instance'] && self['__is_instance__'] !== true) $pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
					if ($pyjs['options']['arg_count'] && (arguments['length'] < 2 || arguments['length'] > 5)) $pyjs__exception_func_param(arguments['callee']['__name__'], 2, 5, arguments['length']);
				}
				if ($pyjs['options']['arg_instance_type']) {
					if (self.prototype['__md5__'] !== 'cbedf2a898d887ac63f7887a8023045f') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}
				if (typeof _log == 'undefined') _log=arguments['callee']['__args__'][4][1];
				if (typeof fint == 'undefined') fint=arguments['callee']['__args__'][5][1];
				if (typeof _maxwidth == 'undefined') _maxwidth=arguments['callee']['__args__'][6][1];
				var $mul17,$pyjs_try_err,$add20,r,$add19,$sub5,k,$mul18,$sub6,getrandbits;
				$pyjs['track']={'module':'random', 'lineno':167};$pyjs['trackstack']['push']($pyjs['track']);
				$pyjs['track']['module']='random';
				$pyjs['track']['lineno']=167;
				$pyjs['track']['lineno']=175;
				var $pyjs__trackstack_size_1 = $pyjs['trackstack']['length'];
				try {
					$pyjs['track']['lineno']=176;
					getrandbits = $p['getattr'](self, 'getrandbits');
					throw $p['TryElse'];
				} catch($pyjs_try_err) {
					$pyjs['__last_exception_stack__'] = sys['save_exception_stack']($pyjs__trackstack_size_1 - 1);
					$pyjs['__active_exception_stack__'] = null;
					if ($pyjs_try_err['__name__'] == 'TryElse') {
						$pyjs['track']['lineno']=184;
						if ($p['bool'](true)) {
							$pyjs['track']['lineno']=185;
							k = fint($p['__op_add']($add19=1.00001,$add20=_log($p['__op_sub']($sub5=n,$sub6=$constant_int_1), 2.0)));
							$pyjs['track']['lineno']=186;
							r = getrandbits(k);
							$pyjs['track']['lineno']=187;
							while ($p['bool'](((($p['cmp'](r, n))|1) == 1))) {
								$pyjs['track']['lineno']=188;
								r = getrandbits(k);
							}
							$pyjs['track']['lineno']=189;
							$pyjs['track']['lineno']=189;
							var $pyjs__ret = $p['long'](r);
							$pyjs['trackstack']['pop']();$pyjs['track']=$pyjs['trackstack']['pop']();$pyjs['trackstack']['push']($pyjs['track']);
							return $pyjs__ret;
						}
					} else {
						$pyjs_try_err = $p['_errorMapping']($pyjs_try_err);
						var $pyjs_try_err_name = (typeof $pyjs_try_err['__name__'] == 'undefined' ? $pyjs_try_err['name'] : $pyjs_try_err['__name__'] );
						$pyjs['__last_exception__'] = {'error': $pyjs_try_err, 'module': $m};
						if ($pyjs['trackstack']['length'] > $pyjs__trackstack_size_1) {
							$pyjs['trackstack'] = $pyjs['trackstack']['slice'](0,$pyjs__trackstack_size_1);
							$pyjs['track'] = $pyjs['trackstack']['slice'](-1)[0];
						}
						$pyjs['track']['module']='random';
						if (($pyjs_try_err_name == $p['AttributeError']['__name__'])||$p['_isinstance']($pyjs_try_err,$p['AttributeError'])) {
							$pyjs['track']['lineno']=178;
						} else { $pyjs['__active_exception_stack__'] = $pyjs['__last_exception_stack__']; $pyjs['__last_exception_stack__'] = null; throw $pyjs_try_err; }
					}
				}
				$pyjs['track']['lineno']=193;
				$pyjs['track']['lineno']=193;
				var $pyjs__ret = fint((typeof ($mul17=self['random']())==typeof ($mul18=n) && typeof $mul17=='number'?
					$mul17*$mul18:
					$p['op_mul']($mul17,$mul18)));
				$pyjs['trackstack']['pop']();$pyjs['track']=$pyjs['trackstack']['pop']();$pyjs['trackstack']['push']($pyjs['track']);
				return $pyjs__ret;
			}
	, 1, [null,null,['self'],['n'],['_log', $m['_log']],['fint', $p['int']],['_maxwidth', $p['op_bitshiftleft']($constant_long_1,$m['BPF'])]]);
			$cls_definition['_randbelow'] = $method;
			$pyjs['track']['lineno']=197;
			$method = $pyjs__bind_method2('choice', function(seq) {
				if (this['__is_instance__'] === true) {
					var self = this;
					if ($pyjs['options']['arg_count'] && arguments['length'] != 1) $pyjs__exception_func_param(arguments['callee']['__name__'], 2, 2, arguments['length']+1);
				} else {
					var self = arguments[0];
					seq = arguments[1];
					if ($pyjs['options']['arg_is_instance'] && self['__is_instance__'] !== true) $pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
					if ($pyjs['options']['arg_count'] && arguments['length'] != 2) $pyjs__exception_func_param(arguments['callee']['__name__'], 2, 2, arguments['length']);
				}
				if ($pyjs['options']['arg_instance_type']) {
					if (self.prototype['__md5__'] !== 'cbedf2a898d887ac63f7887a8023045f') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}
				var $mul20,$mul19;
				$pyjs['track']={'module':'random', 'lineno':197};$pyjs['trackstack']['push']($pyjs['track']);
				$pyjs['track']['module']='random';
				$pyjs['track']['lineno']=197;
				$pyjs['track']['lineno']=199;
				$pyjs['track']['lineno']=199;
				var $pyjs__ret = seq['__getitem__']($p['int']((typeof ($mul19=self['random']())==typeof ($mul20=$p['len'](seq)) && typeof $mul19=='number'?
					$mul19*$mul20:
					$p['op_mul']($mul19,$mul20))));
				$pyjs['trackstack']['pop']();$pyjs['track']=$pyjs['trackstack']['pop']();$pyjs['trackstack']['push']($pyjs['track']);
				return $pyjs__ret;
			}
	, 1, [null,null,['self'],['seq']]);
			$cls_definition['choice'] = $method;
			$pyjs['track']['lineno']=201;
			$method = $pyjs__bind_method2('shuffle', function(x, random, fint) {
				if (this['__is_instance__'] === true) {
					var self = this;
					if ($pyjs['options']['arg_count'] && (arguments['length'] < 1 || arguments['length'] > 3)) $pyjs__exception_func_param(arguments['callee']['__name__'], 2, 4, arguments['length']+1);
				} else {
					var self = arguments[0];
					x = arguments[1];
					random = arguments[2];
					fint = arguments[3];
					if ($pyjs['options']['arg_is_instance'] && self['__is_instance__'] !== true) $pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
					if ($pyjs['options']['arg_count'] && (arguments['length'] < 2 || arguments['length'] > 4)) $pyjs__exception_func_param(arguments['callee']['__name__'], 2, 4, arguments['length']);
				}
				if ($pyjs['options']['arg_instance_type']) {
					if (self.prototype['__md5__'] !== 'cbedf2a898d887ac63f7887a8023045f') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}
				if (typeof random == 'undefined') random=arguments['callee']['__args__'][4][1];
				if (typeof fint == 'undefined') fint=arguments['callee']['__args__'][5][1];
				var $iter2_nextval,$iter2_type,$iter2_iter,i,j,$add21,$iter2_idx,$pyjs__trackstack_size_1,$mul22,$add22,$iter2_array,$mul21;
				$pyjs['track']={'module':'random', 'lineno':201};$pyjs['trackstack']['push']($pyjs['track']);
				$pyjs['track']['module']='random';
				$pyjs['track']['lineno']=201;
				$pyjs['track']['lineno']=207;
				if ($p['bool']($p['op_is'](random, null))) {
					$pyjs['track']['lineno']=208;
					random = $p['getattr'](self, 'random');
				}
				$pyjs['track']['lineno']=209;
				$pyjs__trackstack_size_1=$pyjs['trackstack']['length'];
				$iter2_iter = $p['reversed']($p['xrange']($constant_int_1, $p['len'](x)));
				$iter2_nextval=$p['__iter_prepare']($iter2_iter,false);
				while (typeof($p['__wrapped_next']($iter2_nextval)['$nextval']) != 'undefined') {
					i = $iter2_nextval['$nextval'];
					$pyjs['track']['lineno']=211;
					j = fint((typeof ($mul21=random())==typeof ($mul22=$p['__op_add']($add21=i,$add22=$constant_int_1)) && typeof $mul21=='number'?
						$mul21*$mul22:
						$p['op_mul']($mul21,$mul22)));
					$pyjs['track']['lineno']=212;
					var $tupleassign3 = $p['__ass_unpack']($p['tuple']([x['__getitem__'](j), x['__getitem__'](i)]), 2, null);
					x['__setitem__'](i, $tupleassign3[0]);
					x['__setitem__'](j, $tupleassign3[1]);
				}
				if ($pyjs['trackstack']['length'] > $pyjs__trackstack_size_1) {
					$pyjs['trackstack'] = $pyjs['trackstack']['slice'](0,$pyjs__trackstack_size_1);
					$pyjs['track'] = $pyjs['trackstack']['slice'](-1)[0];
				}
				$pyjs['track']['module']='random';
				$pyjs['trackstack']['pop']();$pyjs['track']=$pyjs['trackstack']['pop']();$pyjs['trackstack']['push']($pyjs['track']);
				return null;
			}
	, 1, [null,null,['self'],['x'],['random', null],['fint', $p['int']]]);
			$cls_definition['shuffle'] = $method;
			$pyjs['track']['lineno']=214;
			$method = $pyjs__bind_method2('sample', function(population, k) {
				if (this['__is_instance__'] === true) {
					var self = this;
					if ($pyjs['options']['arg_count'] && arguments['length'] != 2) $pyjs__exception_func_param(arguments['callee']['__name__'], 3, 3, arguments['length']+1);
				} else {
					var self = arguments[0];
					population = arguments[1];
					k = arguments[2];
					if ($pyjs['options']['arg_is_instance'] && self['__is_instance__'] !== true) $pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
					if ($pyjs['options']['arg_count'] && arguments['length'] != 3) $pyjs__exception_func_param(arguments['callee']['__name__'], 3, 3, arguments['length']);
				}
				if ($pyjs['options']['arg_instance_type']) {
					if (self.prototype['__md5__'] !== 'cbedf2a898d887ac63f7887a8023045f') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}
				var $iter3_array,$mul30,result,$iter4_type,setsize,$add23,$pow6,$pow5,$iter3_idx,_int,$iter4_iter,selected,$add24,selected_add,$sub9,$sub8,$iter3_iter,$mul28,$mul29,$mul26,$mul27,$mul24,$mul25,$sub7,$mul23,__random,$or1,$or2,$sub12,$sub11,$sub10,$iter3_type,pool,i,$iter4_nextval,j,$pyjs_try_err,n,$iter4_idx,$pyjs__trackstack_size_2,$pyjs__trackstack_size_1,$iter4_array,$mul31,$iter3_nextval,$mul32;
				$pyjs['track']={'module':'random', 'lineno':214};$pyjs['trackstack']['push']($pyjs['track']);
				$pyjs['track']['module']='random';
				$pyjs['track']['lineno']=214;
				$pyjs['track']['lineno']=250;
				n = $p['len'](population);
				$pyjs['track']['lineno']=251;
				if ($p['bool'](!$p['bool']((($p['cmp']($constant_int_0, ($compare1 = k)) < 1)&&($p['cmp']($compare1, ($compare2 = n)) < 1))))) {
					$pyjs['track']['lineno']=252;
					$pyjs['__active_exception_stack__'] = null;

					var $pyjs__raise_expr1 = $p['ValueError'];
					var $pyjs__raise_expr2 = 'sample larger than population';
					if ($pyjs__raise_expr2 !== null && $pyjs__raise_expr1['__is_instance__'] === true) {
						throw $p['TypeError']('instance exception may not have a separate value');
					}
					if ($p['isinstance']($pyjs__raise_expr2, $p['tuple'])) {
						throw ($pyjs__raise_expr1['apply']($pyjs__raise_expr1, $pyjs__raise_expr2['getArray']()));
					} else {
						throw ($pyjs__raise_expr1($pyjs__raise_expr2));
					}

				}
				$pyjs['track']['lineno']=253;
				__random = $p['getattr'](self, 'random');
				$pyjs['track']['lineno']=254;
				_int = $p['int'];
				$pyjs['track']['lineno']=255;
				result = (typeof ($mul23=$p['list']([null]))==typeof ($mul24=k) && typeof $mul23=='number'?
					$mul23*$mul24:
					$p['op_mul']($mul23,$mul24));
				$pyjs['track']['lineno']=256;
				setsize = $constant_int_21;
				$pyjs['track']['lineno']=257;
				if ($p['bool'](($p['cmp'](k, $constant_int_5) == 1))) {
					$pyjs['track']['lineno']=258;
					setsize = $p['__op_add']($add23=setsize,$add24=(typeof ($pow5=$constant_int_4)==typeof ($pow6=$m['_ceil']($m['_log']((typeof ($mul25=k)==typeof ($mul26=$constant_int_3) && typeof $mul25=='number'?
						$mul25*$mul26:
						$p['op_mul']($mul25,$mul26)), $constant_int_4))) && typeof $pow5=='number'?
						Math['pow']($pow5,$pow6):
						$p['op_pow']($pow5,$pow6)));
				}
				$pyjs['track']['lineno']=259;
				if ($p['bool'](($p['bool']($or1=($p['cmp'](n, setsize) < 1))?$or1:$p['hasattr'](population, 'keys')))) {
					$pyjs['track']['lineno']=262;
					pool = $p['list'](population);
					$pyjs['track']['lineno']=263;
					$pyjs__trackstack_size_1=$pyjs['trackstack']['length'];
					$iter3_iter = $p['xrange'](k);
					$iter3_nextval=$p['__iter_prepare']($iter3_iter,false);
					while (typeof($p['__wrapped_next']($iter3_nextval)['$nextval']) != 'undefined') {
						i = $iter3_nextval['$nextval'];
						$pyjs['track']['lineno']=264;
						j = _int((typeof ($mul27=__random())==typeof ($mul28=$p['__op_sub']($sub7=n,$sub8=i)) && typeof $mul27=='number'?
							$mul27*$mul28:
							$p['op_mul']($mul27,$mul28)));
						$pyjs['track']['lineno']=265;
						result['__setitem__'](i, pool['__getitem__'](j));
						$pyjs['track']['lineno']=266;
						pool['__setitem__'](j, pool['__getitem__']($p['__op_sub']($sub11=$p['__op_sub']($sub9=n,$sub10=i),$sub12=$constant_int_1)));
					}
					if ($pyjs['trackstack']['length'] > $pyjs__trackstack_size_1) {
						$pyjs['trackstack'] = $pyjs['trackstack']['slice'](0,$pyjs__trackstack_size_1);
						$pyjs['track'] = $pyjs['trackstack']['slice'](-1)[0];
					}
					$pyjs['track']['module']='random';
				}
				else {
					$pyjs['track']['lineno']=268;
					var $pyjs__trackstack_size_1 = $pyjs['trackstack']['length'];
					try {
						$pyjs['track']['lineno']=269;
						selected = $p['set']();
						$pyjs['track']['lineno']=270;
						selected_add = $p['getattr'](selected, 'add');
						$pyjs['track']['lineno']=271;
						$pyjs__trackstack_size_2=$pyjs['trackstack']['length'];
						$iter4_iter = $p['xrange'](k);
						$iter4_nextval=$p['__iter_prepare']($iter4_iter,false);
						while (typeof($p['__wrapped_next']($iter4_nextval)['$nextval']) != 'undefined') {
							i = $iter4_nextval['$nextval'];
							$pyjs['track']['lineno']=272;
							j = _int((typeof ($mul29=__random())==typeof ($mul30=n) && typeof $mul29=='number'?
								$mul29*$mul30:
								$p['op_mul']($mul29,$mul30)));
							$pyjs['track']['lineno']=273;
							while ($p['bool'](selected['__contains__'](j))) {
								$pyjs['track']['lineno']=274;
								j = _int((typeof ($mul31=__random())==typeof ($mul32=n) && typeof $mul31=='number'?
									$mul31*$mul32:
									$p['op_mul']($mul31,$mul32)));
							}
							$pyjs['track']['lineno']=275;
							selected_add(j);
							$pyjs['track']['lineno']=276;
							result['__setitem__'](i, population['__getitem__'](j));
						}
						if ($pyjs['trackstack']['length'] > $pyjs__trackstack_size_2) {
							$pyjs['trackstack'] = $pyjs['trackstack']['slice'](0,$pyjs__trackstack_size_2);
							$pyjs['track'] = $pyjs['trackstack']['slice'](-1)[0];
						}
						$pyjs['track']['module']='random';
					} catch($pyjs_try_err) {
						$pyjs['__last_exception_stack__'] = sys['save_exception_stack']($pyjs__trackstack_size_1 - 1);
						$pyjs['__active_exception_stack__'] = null;
						$pyjs_try_err = $p['_errorMapping']($pyjs_try_err);
						var $pyjs_try_err_name = (typeof $pyjs_try_err['__name__'] == 'undefined' ? $pyjs_try_err['name'] : $pyjs_try_err['__name__'] );
						$pyjs['__last_exception__'] = {'error': $pyjs_try_err, 'module': $m};
						if ($pyjs['trackstack']['length'] > $pyjs__trackstack_size_1) {
							$pyjs['trackstack'] = $pyjs['trackstack']['slice'](0,$pyjs__trackstack_size_1);
							$pyjs['track'] = $pyjs['trackstack']['slice'](-1)[0];
						}
						$pyjs['track']['module']='random';
						if ((($pyjs_try_err_name == $p['TypeError']['__name__'])||$p['_isinstance']($pyjs_try_err,$p['TypeError']))||(($pyjs_try_err_name == $p['KeyError']['__name__'])||$p['_isinstance']($pyjs_try_err,$p['KeyError']))) {
							$pyjs['track']['lineno']=278;
							if ($p['bool']($p['isinstance'](population, $p['list']))) {
								$pyjs['track']['lineno']=279;
								$pyjs['__active_exception_stack__'] = $pyjs['__last_exception_stack__'];
								$pyjs['__last_exception_stack__'] = null;
								throw ($pyjs['__last_exception__']?
									$pyjs['__last_exception__']['error']:
									$p['TypeError']('exceptions must be classes, instances, or strings (deprecated), not NoneType'));
							}
							$pyjs['track']['lineno']=280;
							$pyjs['track']['lineno']=280;
							var $pyjs__ret = self['sample']($p['tuple'](population), k);
							$pyjs['trackstack']['pop']();$pyjs['track']=$pyjs['trackstack']['pop']();$pyjs['trackstack']['push']($pyjs['track']);
							return $pyjs__ret;
						} else { $pyjs['__active_exception_stack__'] = $pyjs['__last_exception_stack__']; $pyjs['__last_exception_stack__'] = null; throw $pyjs_try_err; }
					}
				}
				$pyjs['track']['lineno']=281;
				$pyjs['track']['lineno']=281;
				var $pyjs__ret = result;
				$pyjs['trackstack']['pop']();$pyjs['track']=$pyjs['trackstack']['pop']();$pyjs['trackstack']['push']($pyjs['track']);
				return $pyjs__ret;
			}
	, 1, [null,null,['self'],['population'],['k']]);
			$cls_definition['sample'] = $method;
			$pyjs['track']['lineno']=287;
			$method = $pyjs__bind_method2('uniform', function(a, b) {
				if (this['__is_instance__'] === true) {
					var self = this;
					if ($pyjs['options']['arg_count'] && arguments['length'] != 2) $pyjs__exception_func_param(arguments['callee']['__name__'], 3, 3, arguments['length']+1);
				} else {
					var self = arguments[0];
					a = arguments[1];
					b = arguments[2];
					if ($pyjs['options']['arg_is_instance'] && self['__is_instance__'] !== true) $pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
					if ($pyjs['options']['arg_count'] && arguments['length'] != 3) $pyjs__exception_func_param(arguments['callee']['__name__'], 3, 3, arguments['length']);
				}
				if ($pyjs['options']['arg_instance_type']) {
					if (self.prototype['__md5__'] !== 'cbedf2a898d887ac63f7887a8023045f') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}
				var $sub13,$add25,$sub14,$mul34,$add26,$mul33;
				$pyjs['track']={'module':'random', 'lineno':287};$pyjs['trackstack']['push']($pyjs['track']);
				$pyjs['track']['module']='random';
				$pyjs['track']['lineno']=287;
				$pyjs['track']['lineno']=289;
				$pyjs['track']['lineno']=289;
				var $pyjs__ret = $p['__op_add']($add25=a,$add26=(typeof ($mul33=$p['__op_sub']($sub13=b,$sub14=a))==typeof ($mul34=self['random']()) && typeof $mul33=='number'?
					$mul33*$mul34:
					$p['op_mul']($mul33,$mul34)));
				$pyjs['trackstack']['pop']();$pyjs['track']=$pyjs['trackstack']['pop']();$pyjs['trackstack']['push']($pyjs['track']);
				return $pyjs__ret;
			}
	, 1, [null,null,['self'],['a'],['b']]);
			$cls_definition['uniform'] = $method;
			$pyjs['track']['lineno']=293;
			$method = $pyjs__bind_method2('triangular', function(low, high, mode) {
				if (this['__is_instance__'] === true) {
					var self = this;
					if ($pyjs['options']['arg_count'] && (arguments['length'] < 0 || arguments['length'] > 3)) $pyjs__exception_func_param(arguments['callee']['__name__'], 1, 4, arguments['length']+1);
				} else {
					var self = arguments[0];
					low = arguments[1];
					high = arguments[2];
					mode = arguments[3];
					if ($pyjs['options']['arg_is_instance'] && self['__is_instance__'] !== true) $pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
					if ($pyjs['options']['arg_count'] && (arguments['length'] < 1 || arguments['length'] > 4)) $pyjs__exception_func_param(arguments['callee']['__name__'], 1, 4, arguments['length']);
				}
				if ($pyjs['options']['arg_instance_type']) {
					if (self.prototype['__md5__'] !== 'cbedf2a898d887ac63f7887a8023045f') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}
				if (typeof low == 'undefined') low=arguments['callee']['__args__'][3][1];
				if (typeof high == 'undefined') high=arguments['callee']['__args__'][4][1];
				if (typeof mode == 'undefined') mode=arguments['callee']['__args__'][5][1];
				var $sub22,$sub23,$sub20,$sub21,$sub24,$pow7,$add28,$add27,$pow8,$mul38,$sub19,$sub18,$sub17,$sub16,$sub15,$div3,$div4,c,u,$mul35,$mul37,$mul36;
				$pyjs['track']={'module':'random', 'lineno':293};$pyjs['trackstack']['push']($pyjs['track']);
				$pyjs['track']['module']='random';
				$pyjs['track']['lineno']=293;
				$pyjs['track']['lineno']=301;
				u = self['random']();
				$pyjs['track']['lineno']=302;
				c = ($p['bool']($p['op_is'](mode, null))? (0.5) : ((typeof ($div3=$p['__op_sub']($sub15=mode,$sub16=low))==typeof ($div4=$p['__op_sub']($sub17=high,$sub18=low)) && typeof $div3=='number' && $div4 !== 0?
					$div3/$div4:
					$p['op_div']($div3,$div4))));
				$pyjs['track']['lineno']=303;
				if ($p['bool'](($p['cmp'](u, c) == 1))) {
					$pyjs['track']['lineno']=304;
					u = $p['__op_sub']($sub19=1.0,$sub20=u);
					$pyjs['track']['lineno']=305;
					c = $p['__op_sub']($sub21=1.0,$sub22=c);
					$pyjs['track']['lineno']=306;
					var $tupleassign4 = $p['__ass_unpack']($p['tuple']([high, low]), 2, null);
					low = $tupleassign4[0];
					high = $tupleassign4[1];
				}
				$pyjs['track']['lineno']=307;
				$pyjs['track']['lineno']=307;
				var $pyjs__ret = $p['__op_add']($add27=low,$add28=(typeof ($mul37=$p['__op_sub']($sub23=high,$sub24=low))==typeof ($mul38=(typeof ($pow7=(typeof ($mul35=u)==typeof ($mul36=c) && typeof $mul35=='number'?
					$mul35*$mul36:
					$p['op_mul']($mul35,$mul36)))==typeof ($pow8=0.5) && typeof $pow7=='number'?
					Math['pow']($pow7,$pow8):
					$p['op_pow']($pow7,$pow8))) && typeof $mul37=='number'?
					$mul37*$mul38:
					$p['op_mul']($mul37,$mul38)));
				$pyjs['trackstack']['pop']();$pyjs['track']=$pyjs['trackstack']['pop']();$pyjs['trackstack']['push']($pyjs['track']);
				return $pyjs__ret;
			}
	, 1, [null,null,['self'],['low', 0.0],['high', 1.0],['mode', null]]);
			$cls_definition['triangular'] = $method;
			$pyjs['track']['lineno']=311;
			$method = $pyjs__bind_method2('normalvariate', function(mu, sigma) {
				if (this['__is_instance__'] === true) {
					var self = this;
					if ($pyjs['options']['arg_count'] && arguments['length'] != 2) $pyjs__exception_func_param(arguments['callee']['__name__'], 3, 3, arguments['length']+1);
				} else {
					var self = arguments[0];
					mu = arguments[1];
					sigma = arguments[2];
					if ($pyjs['options']['arg_is_instance'] && self['__is_instance__'] !== true) $pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
					if ($pyjs['options']['arg_count'] && arguments['length'] != 3) $pyjs__exception_func_param(arguments['callee']['__name__'], 3, 3, arguments['length']);
				}
				if ($pyjs['options']['arg_instance_type']) {
					if (self.prototype['__md5__'] !== 'cbedf2a898d887ac63f7887a8023045f') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}
				var $sub26,$sub27,$sub25,u1,$sub28,zz,u2,$add29,$mul44,$mul40,$mul41,$mul42,$mul43,__random,$div8,$div6,$div7,$div5,$add30,$mul39,z;
				$pyjs['track']={'module':'random', 'lineno':311};$pyjs['trackstack']['push']($pyjs['track']);
				$pyjs['track']['module']='random';
				$pyjs['track']['lineno']=311;
				$pyjs['track']['lineno']=322;
				__random = $p['getattr'](self, 'random');
				$pyjs['track']['lineno']=323;
				while ($p['bool']($constant_int_1)) {
					$pyjs['track']['lineno']=324;
					u1 = __random();
					$pyjs['track']['lineno']=325;
					u2 = $p['__op_sub']($sub25=1.0,$sub26=__random());
					$pyjs['track']['lineno']=326;
					z = (typeof ($div5=(typeof ($mul39=$m['NV_MAGICCONST'])==typeof ($mul40=$p['__op_sub']($sub27=u1,$sub28=0.5)) && typeof $mul39=='number'?
						$mul39*$mul40:
						$p['op_mul']($mul39,$mul40)))==typeof ($div6=u2) && typeof $div5=='number' && $div6 !== 0?
						$div5/$div6:
						$p['op_div']($div5,$div6));
					$pyjs['track']['lineno']=327;
					zz = (typeof ($div7=(typeof ($mul41=z)==typeof ($mul42=z) && typeof $mul41=='number'?
						$mul41*$mul42:
						$p['op_mul']($mul41,$mul42)))==typeof ($div8=4.0) && typeof $div7=='number' && $div8 !== 0?
						$div7/$div8:
						$p['op_div']($div7,$div8));
					$pyjs['track']['lineno']=328;
					if ($p['bool'](($p['cmp'](zz, (typeof ($usub3=$m['_log'](u2))=='number'?
						-$usub3:
						$p['op_usub']($usub3))) < 1))) {
						$pyjs['track']['lineno']=329;
						break;
					}
				}
				$pyjs['track']['lineno']=330;
				$pyjs['track']['lineno']=330;
				var $pyjs__ret = $p['__op_add']($add29=mu,$add30=(typeof ($mul43=z)==typeof ($mul44=sigma) && typeof $mul43=='number'?
					$mul43*$mul44:
					$p['op_mul']($mul43,$mul44)));
				$pyjs['trackstack']['pop']();$pyjs['track']=$pyjs['trackstack']['pop']();$pyjs['trackstack']['push']($pyjs['track']);
				return $pyjs__ret;
			}
	, 1, [null,null,['self'],['mu'],['sigma']]);
			$cls_definition['normalvariate'] = $method;
			$pyjs['track']['lineno']=334;
			$method = $pyjs__bind_method2('lognormvariate', function(mu, sigma) {
				if (this['__is_instance__'] === true) {
					var self = this;
					if ($pyjs['options']['arg_count'] && arguments['length'] != 2) $pyjs__exception_func_param(arguments['callee']['__name__'], 3, 3, arguments['length']+1);
				} else {
					var self = arguments[0];
					mu = arguments[1];
					sigma = arguments[2];
					if ($pyjs['options']['arg_is_instance'] && self['__is_instance__'] !== true) $pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
					if ($pyjs['options']['arg_count'] && arguments['length'] != 3) $pyjs__exception_func_param(arguments['callee']['__name__'], 3, 3, arguments['length']);
				}
				if ($pyjs['options']['arg_instance_type']) {
					if (self.prototype['__md5__'] !== 'cbedf2a898d887ac63f7887a8023045f') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}

				$pyjs['track']={'module':'random', 'lineno':334};$pyjs['trackstack']['push']($pyjs['track']);
				$pyjs['track']['module']='random';
				$pyjs['track']['lineno']=334;
				$pyjs['track']['lineno']=340;
				$pyjs['track']['lineno']=340;
				var $pyjs__ret = $m['_exp'](self['normalvariate'](mu, sigma));
				$pyjs['trackstack']['pop']();$pyjs['track']=$pyjs['trackstack']['pop']();$pyjs['trackstack']['push']($pyjs['track']);
				return $pyjs__ret;
			}
	, 1, [null,null,['self'],['mu'],['sigma']]);
			$cls_definition['lognormvariate'] = $method;
			$pyjs['track']['lineno']=344;
			$method = $pyjs__bind_method2('expovariate', function(lambd) {
				if (this['__is_instance__'] === true) {
					var self = this;
					if ($pyjs['options']['arg_count'] && arguments['length'] != 1) $pyjs__exception_func_param(arguments['callee']['__name__'], 2, 2, arguments['length']+1);
				} else {
					var self = arguments[0];
					lambd = arguments[1];
					if ($pyjs['options']['arg_is_instance'] && self['__is_instance__'] !== true) $pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
					if ($pyjs['options']['arg_count'] && arguments['length'] != 2) $pyjs__exception_func_param(arguments['callee']['__name__'], 2, 2, arguments['length']);
				}
				if ($pyjs['options']['arg_instance_type']) {
					if (self.prototype['__md5__'] !== 'cbedf2a898d887ac63f7887a8023045f') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}
				var __random,$div10,$div9,u;
				$pyjs['track']={'module':'random', 'lineno':344};$pyjs['trackstack']['push']($pyjs['track']);
				$pyjs['track']['module']='random';
				$pyjs['track']['lineno']=344;
				$pyjs['track']['lineno']=355;
				__random = $p['getattr'](self, 'random');
				$pyjs['track']['lineno']=356;
				u = __random();
				$pyjs['track']['lineno']=357;
				while ($p['bool'](($p['cmp'](u, 1e-07) < 1))) {
					$pyjs['track']['lineno']=358;
					u = __random();
				}
				$pyjs['track']['lineno']=359;
				$pyjs['track']['lineno']=359;
				var $pyjs__ret = (typeof ($div9=(typeof ($usub4=$m['_log'](u))=='number'?
					-$usub4:
					$p['op_usub']($usub4)))==typeof ($div10=lambd) && typeof $div9=='number' && $div10 !== 0?
					$div9/$div10:
					$p['op_div']($div9,$div10));
				$pyjs['trackstack']['pop']();$pyjs['track']=$pyjs['trackstack']['pop']();$pyjs['trackstack']['push']($pyjs['track']);
				return $pyjs__ret;
			}
	, 1, [null,null,['self'],['lambd']]);
			$cls_definition['expovariate'] = $method;
			$pyjs['track']['lineno']=363;
			$method = $pyjs__bind_method2('vonmisesvariate', function(mu, kappa) {
				if (this['__is_instance__'] === true) {
					var self = this;
					if ($pyjs['options']['arg_count'] && arguments['length'] != 2) $pyjs__exception_func_param(arguments['callee']['__name__'], 3, 3, arguments['length']+1);
				} else {
					var self = arguments[0];
					mu = arguments[1];
					kappa = arguments[2];
					if ($pyjs['options']['arg_is_instance'] && self['__is_instance__'] !== true) $pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
					if ($pyjs['options']['arg_count'] && arguments['length'] != 3) $pyjs__exception_func_param(arguments['callee']['__name__'], 3, 3, arguments['length']);
				}
				if ($pyjs['options']['arg_instance_type']) {
					if (self.prototype['__md5__'] !== 'cbedf2a898d887ac63f7887a8023045f') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}
				var u2,$mul50,$or4,$mul57,$sub29,$add37,$mod5,$add40,$sub32,$mul55,$mod3,$add35,$mul62,$mul63,$mul60,$mul61,$mul48,$mul49,$mul64,$mul65,$div14,$mul45,$mul47,u1,$div11,$div12,$div13,$div15,$mod4,theta,$add39,$sub31,$sub30,$sub33,__random,$sub35,$sub34,$or3,$sub36,$sub38,c,$add38,$add41,$mul58,$add42,$mul68,$mul66,$sub37,$div16,$mul67,a,$mul59,b,f,$add32,$mul52,$mul51,$add31,$add36,$mul56,$add34,$mul54,$mul53,r,$mod6,u3,$add33,z,$mul46;
				$pyjs['track']={'module':'random', 'lineno':363};$pyjs['trackstack']['push']($pyjs['track']);
				$pyjs['track']['module']='random';
				$pyjs['track']['lineno']=363;
				$pyjs['track']['lineno']=381;
				__random = $p['getattr'](self, 'random');
				$pyjs['track']['lineno']=382;
				if ($p['bool'](($p['cmp'](kappa, 1e-06) < 1))) {
					$pyjs['track']['lineno']=383;
					$pyjs['track']['lineno']=383;
					var $pyjs__ret = (typeof ($mul45=$m['TWOPI'])==typeof ($mul46=__random()) && typeof $mul45=='number'?
						$mul45*$mul46:
						$p['op_mul']($mul45,$mul46));
					$pyjs['trackstack']['pop']();$pyjs['track']=$pyjs['trackstack']['pop']();$pyjs['trackstack']['push']($pyjs['track']);
					return $pyjs__ret;
				}
				$pyjs['track']['lineno']=385;
				a = $p['__op_add']($add33=1.0,$add34=$m['_sqrt']($p['__op_add']($add31=1.0,$add32=(typeof ($mul49=(typeof ($mul47=4.0)==typeof ($mul48=kappa) && typeof $mul47=='number'?
					$mul47*$mul48:
					$p['op_mul']($mul47,$mul48)))==typeof ($mul50=kappa) && typeof $mul49=='number'?
					$mul49*$mul50:
					$p['op_mul']($mul49,$mul50)))));
				$pyjs['track']['lineno']=386;
				b = (typeof ($div11=$p['__op_sub']($sub29=a,$sub30=$m['_sqrt']((typeof ($mul51=2.0)==typeof ($mul52=a) && typeof $mul51=='number'?
					$mul51*$mul52:
					$p['op_mul']($mul51,$mul52)))))==typeof ($div12=(typeof ($mul53=2.0)==typeof ($mul54=kappa) && typeof $mul53=='number'?
					$mul53*$mul54:
					$p['op_mul']($mul53,$mul54))) && typeof $div11=='number' && $div12 !== 0?
					$div11/$div12:
					$p['op_div']($div11,$div12));
				$pyjs['track']['lineno']=387;
				r = (typeof ($div13=$p['__op_add']($add35=1.0,$add36=(typeof ($mul55=b)==typeof ($mul56=b) && typeof $mul55=='number'?
					$mul55*$mul56:
					$p['op_mul']($mul55,$mul56))))==typeof ($div14=(typeof ($mul57=2.0)==typeof ($mul58=b) && typeof $mul57=='number'?
					$mul57*$mul58:
					$p['op_mul']($mul57,$mul58))) && typeof $div13=='number' && $div14 !== 0?
					$div13/$div14:
					$p['op_div']($div13,$div14));
				$pyjs['track']['lineno']=389;
				while ($p['bool']($constant_int_1)) {
					$pyjs['track']['lineno']=390;
					u1 = __random();
					$pyjs['track']['lineno']=392;
					z = $m['_cos']((typeof ($mul59=$m['_pi'])==typeof ($mul60=u1) && typeof $mul59=='number'?
						$mul59*$mul60:
						$p['op_mul']($mul59,$mul60)));
					$pyjs['track']['lineno']=393;
					f = (typeof ($div15=$p['__op_add']($add37=1.0,$add38=(typeof ($mul61=r)==typeof ($mul62=z) && typeof $mul61=='number'?
						$mul61*$mul62:
						$p['op_mul']($mul61,$mul62))))==typeof ($div16=$p['__op_add']($add39=r,$add40=z)) && typeof $div15=='number' && $div16 !== 0?
						$div15/$div16:
						$p['op_div']($div15,$div16));
					$pyjs['track']['lineno']=394;
					c = (typeof ($mul63=kappa)==typeof ($mul64=$p['__op_sub']($sub31=r,$sub32=f)) && typeof $mul63=='number'?
						$mul63*$mul64:
						$p['op_mul']($mul63,$mul64));
					$pyjs['track']['lineno']=396;
					u2 = __random();
					$pyjs['track']['lineno']=398;
					if ($p['bool'](($p['bool']($or3=($p['cmp'](u2, (typeof ($mul65=c)==typeof ($mul66=$p['__op_sub']($sub33=2.0,$sub34=c)) && typeof $mul65=='number'?
						$mul65*$mul66:
						$p['op_mul']($mul65,$mul66))) == -1))?$or3:($p['cmp'](u2, (typeof ($mul67=c)==typeof ($mul68=$m['_exp']($p['__op_sub']($sub35=1.0,$sub36=c))) && typeof $mul67=='number'?
						$mul67*$mul68:
						$p['op_mul']($mul67,$mul68))) < 1)))) {
						$pyjs['track']['lineno']=399;
						break;
					}
				}
				$pyjs['track']['lineno']=401;
				u3 = __random();
				$pyjs['track']['lineno']=402;
				if ($p['bool'](($p['cmp'](u3, 0.5) == 1))) {
					$pyjs['track']['lineno']=403;
					theta = $p['__op_add']($add41=(typeof ($mod3=mu)==typeof ($mod4=$m['TWOPI']) && typeof $mod3=='number'?
						(($mod3=$mod3%$mod4)<0&&$mod4>0?$mod3+$mod4:$mod3):
						$p['op_mod']($mod3,$mod4)),$add42=$m['_acos'](f));
				}
				else {
					$pyjs['track']['lineno']=405;
					theta = $p['__op_sub']($sub37=(typeof ($mod5=mu)==typeof ($mod6=$m['TWOPI']) && typeof $mod5=='number'?
						(($mod5=$mod5%$mod6)<0&&$mod6>0?$mod5+$mod6:$mod5):
						$p['op_mod']($mod5,$mod6)),$sub38=$m['_acos'](f));
				}
				$pyjs['track']['lineno']=407;
				$pyjs['track']['lineno']=407;
				var $pyjs__ret = theta;
				$pyjs['trackstack']['pop']();$pyjs['track']=$pyjs['trackstack']['pop']();$pyjs['trackstack']['push']($pyjs['track']);
				return $pyjs__ret;
			}
	, 1, [null,null,['self'],['mu'],['kappa']]);
			$cls_definition['vonmisesvariate'] = $method;
			$pyjs['track']['lineno']=411;
			$method = $pyjs__bind_method2('gammavariate', function(alpha, beta) {
				if (this['__is_instance__'] === true) {
					var self = this;
					if ($pyjs['options']['arg_count'] && arguments['length'] != 2) $pyjs__exception_func_param(arguments['callee']['__name__'], 3, 3, arguments['length']+1);
				} else {
					var self = arguments[0];
					alpha = arguments[1];
					beta = arguments[2];
					if ($pyjs['options']['arg_is_instance'] && self['__is_instance__'] !== true) $pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
					if ($pyjs['options']['arg_count'] && arguments['length'] != 3) $pyjs__exception_func_param(arguments['callee']['__name__'], 3, 3, arguments['length']);
				}
				if ($pyjs['options']['arg_instance_type']) {
					if (self.prototype['__md5__'] !== 'cbedf2a898d887ac63f7887a8023045f') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}
				var $mul80,$add44,$mul86,$add43,$pow10,$mul82,$div23,$sub48,$sub49,__random,$sub40,$sub41,$sub42,$sub43,$sub44,$sub45,$sub46,$sub47,ainv,$div18,$div19,$add49,$add48,$add47,$add46,$mul69,u1,bbb,$pow9,u2,$mul88,$pow11,$sub52,$sub51,$div17,$mul87,b,$add50,$or5,$mul81,$or7,$or6,$mul84,$mul85,$mul83,$div20,$sub39,$or8,$pow12,$div22,$div25,$sub50,$div21,$sub54,$div24,$mul71,$mul70,$mul73,$mul72,$mul75,$mul74,$mul77,$mul76,$mul79,$mul78,$div26,p,r,u,v,x,z,$sub53,$add45,ccc;
				$pyjs['track']={'module':'random', 'lineno':411};$pyjs['trackstack']['push']($pyjs['track']);
				$pyjs['track']['module']='random';
				$pyjs['track']['lineno']=411;
				$pyjs['track']['lineno']=420;
				if ($p['bool'](($p['bool']($or5=($p['cmp'](alpha, 0.0) < 1))?$or5:($p['cmp'](beta, 0.0) < 1)))) {
					$pyjs['track']['lineno']=421;
					$pyjs['__active_exception_stack__'] = null;

					var $pyjs__raise_expr1 = $p['ValueError'];
					var $pyjs__raise_expr2 = 'gammavariate: alpha and beta must be > 0.0';
					if ($pyjs__raise_expr2 !== null && $pyjs__raise_expr1['__is_instance__'] === true) {
						throw $p['TypeError']('instance exception may not have a separate value');
					}
					if ($p['isinstance']($pyjs__raise_expr2, $p['tuple'])) {
						throw ($pyjs__raise_expr1['apply']($pyjs__raise_expr1, $pyjs__raise_expr2['getArray']()));
					} else {
						throw ($pyjs__raise_expr1($pyjs__raise_expr2));
					}

				}
				$pyjs['track']['lineno']=423;
				__random = $p['getattr'](self, 'random');
				$pyjs['track']['lineno']=424;
				if ($p['bool'](($p['cmp'](alpha, 1.0) == 1))) {
					$pyjs['track']['lineno']=430;
					ainv = $m['_sqrt']($p['__op_sub']($sub39=(typeof ($mul69=2.0)==typeof ($mul70=alpha) && typeof $mul69=='number'?
						$mul69*$mul70:
						$p['op_mul']($mul69,$mul70)),$sub40=1.0));
					$pyjs['track']['lineno']=431;
					bbb = $p['__op_sub']($sub41=alpha,$sub42=$m['LOG4']);
					$pyjs['track']['lineno']=432;
					ccc = $p['__op_add']($add43=alpha,$add44=ainv);
					$pyjs['track']['lineno']=434;
					while ($p['bool']($constant_int_1)) {
						$pyjs['track']['lineno']=435;
						u1 = __random();
						$pyjs['track']['lineno']=436;
						if ($p['bool'](!$p['bool']((($p['cmp'](1e-07, ($compare3 = u1)) == -1)&&($p['cmp']($compare3, ($compare4 = 0.9999999)) == -1))))) {
							$pyjs['track']['lineno']=437;
							continue;
						}
						$pyjs['track']['lineno']=438;
						u2 = $p['__op_sub']($sub43=1.0,$sub44=__random());
						$pyjs['track']['lineno']=439;
						v = (typeof ($div19=$m['_log']((typeof ($div17=u1)==typeof ($div18=$p['__op_sub']($sub45=1.0,$sub46=u1)) && typeof $div17=='number' && $div18 !== 0?
							$div17/$div18:
							$p['op_div']($div17,$div18))))==typeof ($div20=ainv) && typeof $div19=='number' && $div20 !== 0?
							$div19/$div20:
							$p['op_div']($div19,$div20));
						$pyjs['track']['lineno']=440;
						x = (typeof ($mul71=alpha)==typeof ($mul72=$m['_exp'](v)) && typeof $mul71=='number'?
							$mul71*$mul72:
							$p['op_mul']($mul71,$mul72));
						$pyjs['track']['lineno']=441;
						z = (typeof ($mul75=(typeof ($mul73=u1)==typeof ($mul74=u1) && typeof $mul73=='number'?
							$mul73*$mul74:
							$p['op_mul']($mul73,$mul74)))==typeof ($mul76=u2) && typeof $mul75=='number'?
							$mul75*$mul76:
							$p['op_mul']($mul75,$mul76));
						$pyjs['track']['lineno']=442;
						r = $p['__op_sub']($sub47=$p['__op_add']($add45=bbb,$add46=(typeof ($mul77=ccc)==typeof ($mul78=v) && typeof $mul77=='number'?
							$mul77*$mul78:
							$p['op_mul']($mul77,$mul78))),$sub48=x);
						$pyjs['track']['lineno']=443;
						if ($p['bool'](($p['bool']($or7=((($p['cmp']($p['__op_sub']($sub49=$p['__op_add']($add47=r,$add48=$m['SG_MAGICCONST']),$sub50=(typeof ($mul79=4.5)==typeof ($mul80=z) && typeof $mul79=='number'?
							$mul79*$mul80:
							$p['op_mul']($mul79,$mul80))), 0.0))|1) == 1))?$or7:((($p['cmp'](r, $m['_log'](z)))|1) == 1)))) {
							$pyjs['track']['lineno']=444;
							$pyjs['track']['lineno']=444;
							var $pyjs__ret = (typeof ($mul81=x)==typeof ($mul82=beta) && typeof $mul81=='number'?
								$mul81*$mul82:
								$p['op_mul']($mul81,$mul82));
							$pyjs['trackstack']['pop']();$pyjs['track']=$pyjs['trackstack']['pop']();$pyjs['trackstack']['push']($pyjs['track']);
							return $pyjs__ret;
						}
					}
				}
				else if ($p['bool']($p['op_eq'](alpha, 1.0))) {
					$pyjs['track']['lineno']=448;
					u = __random();
					$pyjs['track']['lineno']=449;
					while ($p['bool'](($p['cmp'](u, 1e-07) < 1))) {
						$pyjs['track']['lineno']=450;
						u = __random();
					}
					$pyjs['track']['lineno']=451;
					$pyjs['track']['lineno']=451;
					var $pyjs__ret = (typeof ($mul83=(typeof ($usub5=$m['_log'](u))=='number'?
						-$usub5:
						$p['op_usub']($usub5)))==typeof ($mul84=beta) && typeof $mul83=='number'?
						$mul83*$mul84:
						$p['op_mul']($mul83,$mul84));
					$pyjs['trackstack']['pop']();$pyjs['track']=$pyjs['trackstack']['pop']();$pyjs['trackstack']['push']($pyjs['track']);
					return $pyjs__ret;
				}
				else {
					$pyjs['track']['lineno']=457;
					while ($p['bool']($constant_int_1)) {
						$pyjs['track']['lineno']=458;
						u = __random();
						$pyjs['track']['lineno']=459;
						b = (typeof ($div21=$p['__op_add']($add49=$m['_e'],$add50=alpha))==typeof ($div22=$m['_e']) && typeof $div21=='number' && $div22 !== 0?
							$div21/$div22:
							$p['op_div']($div21,$div22));
						$pyjs['track']['lineno']=460;
						p = (typeof ($mul85=b)==typeof ($mul86=u) && typeof $mul85=='number'?
							$mul85*$mul86:
							$p['op_mul']($mul85,$mul86));
						$pyjs['track']['lineno']=461;
						if ($p['bool'](($p['cmp'](p, 1.0) < 1))) {
							$pyjs['track']['lineno']=462;
							x = (typeof ($pow9=p)==typeof ($pow10=(typeof ($div23=1.0)==typeof ($div24=alpha) && typeof $div23=='number' && $div24 !== 0?
								$div23/$div24:
								$p['op_div']($div23,$div24))) && typeof $pow9=='number'?
								Math['pow']($pow9,$pow10):
								$p['op_pow']($pow9,$pow10));
						}
						else {
							$pyjs['track']['lineno']=464;
							x = (typeof ($usub6=$m['_log']((typeof ($div25=$p['__op_sub']($sub51=b,$sub52=p))==typeof ($div26=alpha) && typeof $div25=='number' && $div26 !== 0?
								$div25/$div26:
								$p['op_div']($div25,$div26))))=='number'?
								-$usub6:
								$p['op_usub']($usub6));
						}
						$pyjs['track']['lineno']=465;
						u1 = __random();
						$pyjs['track']['lineno']=466;
						if ($p['bool'](($p['cmp'](p, 1.0) == 1))) {
							$pyjs['track']['lineno']=467;
							if ($p['bool'](($p['cmp'](u1, (typeof ($pow11=x)==typeof ($pow12=$p['__op_sub']($sub53=alpha,$sub54=1.0)) && typeof $pow11=='number'?
								Math['pow']($pow11,$pow12):
								$p['op_pow']($pow11,$pow12))) < 1))) {
								$pyjs['track']['lineno']=468;
								break;
							}
						}
						else if ($p['bool'](($p['cmp'](u1, $m['_exp']((typeof ($usub7=x)=='number'?
							-$usub7:
							$p['op_usub']($usub7)))) < 1))) {
							$pyjs['track']['lineno']=470;
							break;
						}
					}
					$pyjs['track']['lineno']=471;
					$pyjs['track']['lineno']=471;
					var $pyjs__ret = (typeof ($mul87=x)==typeof ($mul88=beta) && typeof $mul87=='number'?
						$mul87*$mul88:
						$p['op_mul']($mul87,$mul88));
					$pyjs['trackstack']['pop']();$pyjs['track']=$pyjs['trackstack']['pop']();$pyjs['trackstack']['push']($pyjs['track']);
					return $pyjs__ret;
				}
				$pyjs['trackstack']['pop']();$pyjs['track']=$pyjs['trackstack']['pop']();$pyjs['trackstack']['push']($pyjs['track']);
				return null;
			}
	, 1, [null,null,['self'],['alpha'],['beta']]);
			$cls_definition['gammavariate'] = $method;
			$pyjs['track']['lineno']=475;
			$method = $pyjs__bind_method2('gauss', function(mu, sigma) {
				if (this['__is_instance__'] === true) {
					var self = this;
					if ($pyjs['options']['arg_count'] && arguments['length'] != 2) $pyjs__exception_func_param(arguments['callee']['__name__'], 3, 3, arguments['length']+1);
				} else {
					var self = arguments[0];
					mu = arguments[1];
					sigma = arguments[2];
					if ($pyjs['options']['arg_is_instance'] && self['__is_instance__'] !== true) $pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
					if ($pyjs['options']['arg_count'] && arguments['length'] != 3) $pyjs__exception_func_param(arguments['callee']['__name__'], 3, 3, arguments['length']);
				}
				if ($pyjs['options']['arg_instance_type']) {
					if (self.prototype['__md5__'] !== 'cbedf2a898d887ac63f7887a8023045f') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}
				var $sub56,$sub55,__random,$mul95,$mul98,$mul96,$mul89,$mul94,$mul93,$mul92,$mul91,$mul90,$mul97,$add51,x2pi,$add52,z,g2rad;
				$pyjs['track']={'module':'random', 'lineno':475};$pyjs['trackstack']['push']($pyjs['track']);
				$pyjs['track']['module']='random';
				$pyjs['track']['lineno']=475;
				$pyjs['track']['lineno']=500;
				__random = $p['getattr'](self, 'random');
				$pyjs['track']['lineno']=501;
				z = $p['getattr'](self, 'gauss_next');
				$pyjs['track']['lineno']=502;
				self['__is_instance__'] && typeof self['__setattr__'] == 'function' ? self['__setattr__']('gauss_next', null) : $p['setattr'](self, 'gauss_next', null); 
				$pyjs['track']['lineno']=503;
				if ($p['bool']($p['op_is'](z, null))) {
					$pyjs['track']['lineno']=504;
					x2pi = (typeof ($mul89=__random())==typeof ($mul90=$m['TWOPI']) && typeof $mul89=='number'?
						$mul89*$mul90:
						$p['op_mul']($mul89,$mul90));
					$pyjs['track']['lineno']=505;
					g2rad = $m['_sqrt']((typeof ($mul91=(typeof ($usub8=2.0)=='number'?
						-$usub8:
						$p['op_usub']($usub8)))==typeof ($mul92=$m['_log']($p['__op_sub']($sub55=1.0,$sub56=__random()))) && typeof $mul91=='number'?
						$mul91*$mul92:
						$p['op_mul']($mul91,$mul92)));
					$pyjs['track']['lineno']=506;
					z = (typeof ($mul93=$m['_cos'](x2pi))==typeof ($mul94=g2rad) && typeof $mul93=='number'?
						$mul93*$mul94:
						$p['op_mul']($mul93,$mul94));
					$pyjs['track']['lineno']=507;
					self['__is_instance__'] && typeof self['__setattr__'] == 'function' ? self['__setattr__']('gauss_next', (typeof ($mul95=$m['_sin'](x2pi))==typeof ($mul96=g2rad) && typeof $mul95=='number'?
						$mul95*$mul96:
						$p['op_mul']($mul95,$mul96))) : $p['setattr'](self, 'gauss_next', (typeof ($mul95=$m['_sin'](x2pi))==typeof ($mul96=g2rad) && typeof $mul95=='number'?
						$mul95*$mul96:
						$p['op_mul']($mul95,$mul96))); 
				}
				$pyjs['track']['lineno']=509;
				$pyjs['track']['lineno']=509;
				var $pyjs__ret = $p['__op_add']($add51=mu,$add52=(typeof ($mul97=z)==typeof ($mul98=sigma) && typeof $mul97=='number'?
					$mul97*$mul98:
					$p['op_mul']($mul97,$mul98)));
				$pyjs['trackstack']['pop']();$pyjs['track']=$pyjs['trackstack']['pop']();$pyjs['trackstack']['push']($pyjs['track']);
				return $pyjs__ret;
			}
	, 1, [null,null,['self'],['mu'],['sigma']]);
			$cls_definition['gauss'] = $method;
			$pyjs['track']['lineno']=525;
			$method = $pyjs__bind_method2('betavariate', function(alpha, beta) {
				if (this['__is_instance__'] === true) {
					var self = this;
					if ($pyjs['options']['arg_count'] && arguments['length'] != 2) $pyjs__exception_func_param(arguments['callee']['__name__'], 3, 3, arguments['length']+1);
				} else {
					var self = arguments[0];
					alpha = arguments[1];
					beta = arguments[2];
					if ($pyjs['options']['arg_is_instance'] && self['__is_instance__'] !== true) $pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
					if ($pyjs['options']['arg_count'] && arguments['length'] != 3) $pyjs__exception_func_param(arguments['callee']['__name__'], 3, 3, arguments['length']);
				}
				if ($pyjs['options']['arg_instance_type']) {
					if (self.prototype['__md5__'] !== 'cbedf2a898d887ac63f7887a8023045f') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}
				var $add53,$add54,$div27,$div28,y;
				$pyjs['track']={'module':'random', 'lineno':525};$pyjs['trackstack']['push']($pyjs['track']);
				$pyjs['track']['module']='random';
				$pyjs['track']['lineno']=525;
				$pyjs['track']['lineno']=533;
				y = self['gammavariate'](alpha, 1.0);
				$pyjs['track']['lineno']=534;
				if ($p['bool']($p['op_eq'](y, $constant_int_0))) {
					$pyjs['track']['lineno']=535;
					$pyjs['track']['lineno']=535;
					var $pyjs__ret = 0.0;
					$pyjs['trackstack']['pop']();$pyjs['track']=$pyjs['trackstack']['pop']();$pyjs['trackstack']['push']($pyjs['track']);
					return $pyjs__ret;
				}
				else {
					$pyjs['track']['lineno']=537;
					$pyjs['track']['lineno']=537;
					var $pyjs__ret = (typeof ($div27=y)==typeof ($div28=$p['__op_add']($add53=y,$add54=self['gammavariate'](beta, 1.0))) && typeof $div27=='number' && $div28 !== 0?
						$div27/$div28:
						$p['op_div']($div27,$div28));
					$pyjs['trackstack']['pop']();$pyjs['track']=$pyjs['trackstack']['pop']();$pyjs['trackstack']['push']($pyjs['track']);
					return $pyjs__ret;
				}
				$pyjs['trackstack']['pop']();$pyjs['track']=$pyjs['trackstack']['pop']();$pyjs['trackstack']['push']($pyjs['track']);
				return null;
			}
	, 1, [null,null,['self'],['alpha'],['beta']]);
			$cls_definition['betavariate'] = $method;
			$pyjs['track']['lineno']=541;
			$method = $pyjs__bind_method2('paretovariate', function(alpha) {
				if (this['__is_instance__'] === true) {
					var self = this;
					if ($pyjs['options']['arg_count'] && arguments['length'] != 1) $pyjs__exception_func_param(arguments['callee']['__name__'], 2, 2, arguments['length']+1);
				} else {
					var self = arguments[0];
					alpha = arguments[1];
					if ($pyjs['options']['arg_is_instance'] && self['__is_instance__'] !== true) $pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
					if ($pyjs['options']['arg_count'] && arguments['length'] != 2) $pyjs__exception_func_param(arguments['callee']['__name__'], 2, 2, arguments['length']);
				}
				if ($pyjs['options']['arg_instance_type']) {
					if (self.prototype['__md5__'] !== 'cbedf2a898d887ac63f7887a8023045f') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}
				var $sub57,$div32,$div30,$div31,$div29,$sub58,u;
				$pyjs['track']={'module':'random', 'lineno':541};$pyjs['trackstack']['push']($pyjs['track']);
				$pyjs['track']['module']='random';
				$pyjs['track']['lineno']=541;
				$pyjs['track']['lineno']=545;
				u = $p['__op_sub']($sub57=1.0,$sub58=self['random']());
				$pyjs['track']['lineno']=546;
				$pyjs['track']['lineno']=546;
				var $pyjs__ret = (typeof ($div31=1.0)==typeof ($div32=$p['pow'](u, (typeof ($div29=1.0)==typeof ($div30=alpha) && typeof $div29=='number' && $div30 !== 0?
					$div29/$div30:
					$p['op_div']($div29,$div30)))) && typeof $div31=='number' && $div32 !== 0?
					$div31/$div32:
					$p['op_div']($div31,$div32));
				$pyjs['trackstack']['pop']();$pyjs['track']=$pyjs['trackstack']['pop']();$pyjs['trackstack']['push']($pyjs['track']);
				return $pyjs__ret;
			}
	, 1, [null,null,['self'],['alpha']]);
			$cls_definition['paretovariate'] = $method;
			$pyjs['track']['lineno']=550;
			$method = $pyjs__bind_method2('weibullvariate', function(alpha, beta) {
				if (this['__is_instance__'] === true) {
					var self = this;
					if ($pyjs['options']['arg_count'] && arguments['length'] != 2) $pyjs__exception_func_param(arguments['callee']['__name__'], 3, 3, arguments['length']+1);
				} else {
					var self = arguments[0];
					alpha = arguments[1];
					beta = arguments[2];
					if ($pyjs['options']['arg_is_instance'] && self['__is_instance__'] !== true) $pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
					if ($pyjs['options']['arg_count'] && arguments['length'] != 3) $pyjs__exception_func_param(arguments['callee']['__name__'], 3, 3, arguments['length']);
				}
				if ($pyjs['options']['arg_instance_type']) {
					if (self.prototype['__md5__'] !== 'cbedf2a898d887ac63f7887a8023045f') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}
				var $div33,$mul100,$mul99,$div34,$sub59,u,$sub60;
				$pyjs['track']={'module':'random', 'lineno':550};$pyjs['trackstack']['push']($pyjs['track']);
				$pyjs['track']['module']='random';
				$pyjs['track']['lineno']=550;
				$pyjs['track']['lineno']=556;
				u = $p['__op_sub']($sub59=1.0,$sub60=self['random']());
				$pyjs['track']['lineno']=557;
				$pyjs['track']['lineno']=557;
				var $pyjs__ret = (typeof ($mul99=alpha)==typeof ($mul100=$p['pow']((typeof ($usub9=$m['_log'](u))=='number'?
					-$usub9:
					$p['op_usub']($usub9)), (typeof ($div33=1.0)==typeof ($div34=beta) && typeof $div33=='number' && $div34 !== 0?
					$div33/$div34:
					$p['op_div']($div33,$div34)))) && typeof $mul99=='number'?
					$mul99*$mul100:
					$p['op_mul']($mul99,$mul100));
				$pyjs['trackstack']['pop']();$pyjs['track']=$pyjs['trackstack']['pop']();$pyjs['trackstack']['push']($pyjs['track']);
				return $pyjs__ret;
			}
	, 1, [null,null,['self'],['alpha'],['beta']]);
			$cls_definition['weibullvariate'] = $method;
			$pyjs['track']['lineno']=32;
			var $bases = new Array($p['getattr']($m['_random'], 'Random'));
			var $data = $p['dict']();
			for (var $item in $cls_definition) { $data['__setitem__']($item, $cls_definition[$item]); }
			return $p['_create_class']('Random', $p['tuple']($bases), $data);
		})();
		$pyjs['track']['lineno']=561;
		$m['WichmannHill'] = (function(){
			var $cls_definition = new Object();
			var $method;
			$cls_definition['__module__'] = 'random';
			$cls_definition['__md5__'] = '3c4457779e36a98e6957a304fc6e4b5f';
			$pyjs['track']['lineno']=563;
			$cls_definition['VERSION'] = $constant_int_1;
			$pyjs['track']['lineno']=565;
			$method = $pyjs__bind_method2('seed', function(a) {
				if (this['__is_instance__'] === true) {
					var self = this;
					if ($pyjs['options']['arg_count'] && (arguments['length'] < 0 || arguments['length'] > 1)) $pyjs__exception_func_param(arguments['callee']['__name__'], 1, 2, arguments['length']+1);
				} else {
					var self = arguments[0];
					a = arguments[1];
					if ($pyjs['options']['arg_is_instance'] && self['__is_instance__'] !== true) $pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
					if ($pyjs['options']['arg_count'] && (arguments['length'] < 1 || arguments['length'] > 2)) $pyjs__exception_func_param(arguments['callee']['__name__'], 1, 2, arguments['length']);
				}
				if ($pyjs['options']['arg_instance_type']) {
					if (self.prototype['__md5__'] !== '3c4457779e36a98e6957a304fc6e4b5f') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}
				if (typeof a == 'undefined') a=arguments['callee']['__args__'][3][1];
				var $add55,$add56,$add57,$add58,$add59,$pyjs_try_err,$mul101,$mul102,time,y,x,z,$add60;
				$pyjs['track']={'module':'random', 'lineno':565};$pyjs['trackstack']['push']($pyjs['track']);
				$pyjs['track']['module']='random';
				$pyjs['track']['lineno']=565;
				$pyjs['track']['lineno']=579;
				if ($p['bool']($p['op_is'](a, null))) {
					$pyjs['track']['lineno']=580;
					var $pyjs__trackstack_size_1 = $pyjs['trackstack']['length'];
					try {
						$pyjs['track']['lineno']=581;
						a = $p['long']($m['_hexlify']($m['_urandom']($constant_int_16)), $constant_int_16);
					} catch($pyjs_try_err) {
						$pyjs['__last_exception_stack__'] = sys['save_exception_stack']($pyjs__trackstack_size_1 - 1);
						$pyjs['__active_exception_stack__'] = null;
						$pyjs_try_err = $p['_errorMapping']($pyjs_try_err);
						var $pyjs_try_err_name = (typeof $pyjs_try_err['__name__'] == 'undefined' ? $pyjs_try_err['name'] : $pyjs_try_err['__name__'] );
						$pyjs['__last_exception__'] = {'error': $pyjs_try_err, 'module': $m};
						if ($pyjs['trackstack']['length'] > $pyjs__trackstack_size_1) {
							$pyjs['trackstack'] = $pyjs['trackstack']['slice'](0,$pyjs__trackstack_size_1);
							$pyjs['track'] = $pyjs['trackstack']['slice'](-1)[0];
						}
						$pyjs['track']['module']='random';
						if (($pyjs_try_err_name == $p['NotImplementedError']['__name__'])||$p['_isinstance']($pyjs_try_err,$p['NotImplementedError'])) {
							$pyjs['track']['lineno']=583;
							$pyjs['track']={'module':$pyjs['track']['module'],'lineno':$pyjs['track']['lineno']};$pyjs['trackstack']['push']($pyjs['track']);
							time = $p['___import___']('time', null);
							$pyjs['trackstack']['pop']();$pyjs['track']=$pyjs['trackstack']['pop']();$pyjs['trackstack']['push']($pyjs['track']);
							$pyjs['track']['lineno']=584;
							a = $p['long']((typeof ($mul101=time['time']())==typeof ($mul102=$constant_int_256) && typeof $mul101=='number'?
								$mul101*$mul102:
								$p['op_mul']($mul101,$mul102)));
						} else { $pyjs['__active_exception_stack__'] = $pyjs['__last_exception_stack__']; $pyjs['__last_exception_stack__'] = null; throw $pyjs_try_err; }
					}
				}
				$pyjs['track']['lineno']=586;
				if ($p['bool'](!$p['bool']($p['isinstance'](a, $p['tuple']([$p['int'], $p['long']]))))) {
					$pyjs['track']['lineno']=587;
					a = $p['hash'](a);
				}
				$pyjs['track']['lineno']=589;
				var $tupleassign5 = $p['__ass_unpack']($p['divmod'](a, $constant_int_30268), 2, null);
				a = $tupleassign5[0];
				x = $tupleassign5[1];
				$pyjs['track']['lineno']=590;
				var $tupleassign6 = $p['__ass_unpack']($p['divmod'](a, $constant_int_30306), 2, null);
				a = $tupleassign6[0];
				y = $tupleassign6[1];
				$pyjs['track']['lineno']=591;
				var $tupleassign7 = $p['__ass_unpack']($p['divmod'](a, $constant_int_30322), 2, null);
				a = $tupleassign7[0];
				z = $tupleassign7[1];
				$pyjs['track']['lineno']=592;
				self['__is_instance__'] && typeof self['__setattr__'] == 'function' ? self['__setattr__']('_seed', $p['tuple']([$p['__op_add']($add55=$p['int'](x),$add56=$constant_int_1), $p['__op_add']($add57=$p['int'](y),$add58=$constant_int_1), $p['__op_add']($add59=$p['int'](z),$add60=$constant_int_1)])) : $p['setattr'](self, '_seed', $p['tuple']([$p['__op_add']($add55=$p['int'](x),$add56=$constant_int_1), $p['__op_add']($add57=$p['int'](y),$add58=$constant_int_1), $p['__op_add']($add59=$p['int'](z),$add60=$constant_int_1)])); 
				$pyjs['track']['lineno']=594;
				self['__is_instance__'] && typeof self['__setattr__'] == 'function' ? self['__setattr__']('gauss_next', null) : $p['setattr'](self, 'gauss_next', null); 
				$pyjs['trackstack']['pop']();$pyjs['track']=$pyjs['trackstack']['pop']();$pyjs['trackstack']['push']($pyjs['track']);
				return null;
			}
	, 1, [null,null,['self'],['a', null]]);
			$cls_definition['seed'] = $method;
			$pyjs['track']['lineno']=596;
			$method = $pyjs__bind_method2('random', function() {
				if (this['__is_instance__'] === true) {
					var self = this;
					if ($pyjs['options']['arg_count'] && arguments['length'] != 0) $pyjs__exception_func_param(arguments['callee']['__name__'], 1, 1, arguments['length']+1);
				} else {
					var self = arguments[0];
					if ($pyjs['options']['arg_is_instance'] && self['__is_instance__'] !== true) $pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
					if ($pyjs['options']['arg_count'] && arguments['length'] != 1) $pyjs__exception_func_param(arguments['callee']['__name__'], 1, 1, arguments['length']);
				}
				if ($pyjs['options']['arg_instance_type']) {
					if (self.prototype['__md5__'] !== '3c4457779e36a98e6957a304fc6e4b5f') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}
				var $mod7,$mod9,$mod8,$add64,$add61,$div37,$add63,$add62,$div39,$mod14,$mod11,$mod10,$mod13,$mod12,$mul104,$mul105,$mul106,$mul107,$mul103,$div36,$mul108,$div40,$div35,y,x,z,$div38;
				$pyjs['track']={'module':'random', 'lineno':596};$pyjs['trackstack']['push']($pyjs['track']);
				$pyjs['track']['module']='random';
				$pyjs['track']['lineno']=596;
				$pyjs['track']['lineno']=616;
				var $tupleassign8 = $p['__ass_unpack']($p['getattr'](self, '_seed'), 3, null);
				x = $tupleassign8[0];
				y = $tupleassign8[1];
				z = $tupleassign8[2];
				$pyjs['track']['lineno']=617;
				x = (typeof ($mod7=(typeof ($mul103=$constant_int_171)==typeof ($mul104=x) && typeof $mul103=='number'?
					$mul103*$mul104:
					$p['op_mul']($mul103,$mul104)))==typeof ($mod8=$constant_int_30269) && typeof $mod7=='number'?
					(($mod7=$mod7%$mod8)<0&&$mod8>0?$mod7+$mod8:$mod7):
					$p['op_mod']($mod7,$mod8));
				$pyjs['track']['lineno']=618;
				y = (typeof ($mod9=(typeof ($mul105=$constant_int_172)==typeof ($mul106=y) && typeof $mul105=='number'?
					$mul105*$mul106:
					$p['op_mul']($mul105,$mul106)))==typeof ($mod10=$constant_int_30307) && typeof $mod9=='number'?
					(($mod9=$mod9%$mod10)<0&&$mod10>0?$mod9+$mod10:$mod9):
					$p['op_mod']($mod9,$mod10));
				$pyjs['track']['lineno']=619;
				z = (typeof ($mod11=(typeof ($mul107=$constant_int_170)==typeof ($mul108=z) && typeof $mul107=='number'?
					$mul107*$mul108:
					$p['op_mul']($mul107,$mul108)))==typeof ($mod12=$constant_int_30323) && typeof $mod11=='number'?
					(($mod11=$mod11%$mod12)<0&&$mod12>0?$mod11+$mod12:$mod11):
					$p['op_mod']($mod11,$mod12));
				$pyjs['track']['lineno']=620;
				self['__is_instance__'] && typeof self['__setattr__'] == 'function' ? self['__setattr__']('_seed', $p['tuple']([x, y, z])) : $p['setattr'](self, '_seed', $p['tuple']([x, y, z])); 
				$pyjs['track']['lineno']=625;
				$pyjs['track']['lineno']=625;
				var $pyjs__ret = (typeof ($mod13=$p['__op_add']($add63=$p['__op_add']($add61=(typeof ($div35=x)==typeof ($div36=30269.0) && typeof $div35=='number' && $div36 !== 0?
					$div35/$div36:
					$p['op_div']($div35,$div36)),$add62=(typeof ($div37=y)==typeof ($div38=30307.0) && typeof $div37=='number' && $div38 !== 0?
					$div37/$div38:
					$p['op_div']($div37,$div38))),$add64=(typeof ($div39=z)==typeof ($div40=30323.0) && typeof $div39=='number' && $div40 !== 0?
					$div39/$div40:
					$p['op_div']($div39,$div40))))==typeof ($mod14=1.0) && typeof $mod13=='number'?
					(($mod13=$mod13%$mod14)<0&&$mod14>0?$mod13+$mod14:$mod13):
					$p['op_mod']($mod13,$mod14));
				$pyjs['trackstack']['pop']();$pyjs['track']=$pyjs['trackstack']['pop']();$pyjs['trackstack']['push']($pyjs['track']);
				return $pyjs__ret;
			}
	, 1, [null,null,['self']]);
			$cls_definition['random'] = $method;
			$pyjs['track']['lineno']=627;
			$method = $pyjs__bind_method2('getstate', function() {
				if (this['__is_instance__'] === true) {
					var self = this;
					if ($pyjs['options']['arg_count'] && arguments['length'] != 0) $pyjs__exception_func_param(arguments['callee']['__name__'], 1, 1, arguments['length']+1);
				} else {
					var self = arguments[0];
					if ($pyjs['options']['arg_is_instance'] && self['__is_instance__'] !== true) $pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
					if ($pyjs['options']['arg_count'] && arguments['length'] != 1) $pyjs__exception_func_param(arguments['callee']['__name__'], 1, 1, arguments['length']);
				}
				if ($pyjs['options']['arg_instance_type']) {
					if (self.prototype['__md5__'] !== '3c4457779e36a98e6957a304fc6e4b5f') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}

				$pyjs['track']={'module':'random', 'lineno':627};$pyjs['trackstack']['push']($pyjs['track']);
				$pyjs['track']['module']='random';
				$pyjs['track']['lineno']=627;
				$pyjs['track']['lineno']=629;
				$pyjs['track']['lineno']=629;
				var $pyjs__ret = $p['tuple']([$p['getattr'](self, 'VERSION'), $p['getattr'](self, '_seed'), $p['getattr'](self, 'gauss_next')]);
				$pyjs['trackstack']['pop']();$pyjs['track']=$pyjs['trackstack']['pop']();$pyjs['trackstack']['push']($pyjs['track']);
				return $pyjs__ret;
			}
	, 1, [null,null,['self']]);
			$cls_definition['getstate'] = $method;
			$pyjs['track']['lineno']=631;
			$method = $pyjs__bind_method2('setstate', function(state) {
				if (this['__is_instance__'] === true) {
					var self = this;
					if ($pyjs['options']['arg_count'] && arguments['length'] != 1) $pyjs__exception_func_param(arguments['callee']['__name__'], 2, 2, arguments['length']+1);
				} else {
					var self = arguments[0];
					state = arguments[1];
					if ($pyjs['options']['arg_is_instance'] && self['__is_instance__'] !== true) $pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
					if ($pyjs['options']['arg_count'] && arguments['length'] != 2) $pyjs__exception_func_param(arguments['callee']['__name__'], 2, 2, arguments['length']);
				}
				if ($pyjs['options']['arg_instance_type']) {
					if (self.prototype['__md5__'] !== '3c4457779e36a98e6957a304fc6e4b5f') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}
				var version;
				$pyjs['track']={'module':'random', 'lineno':631};$pyjs['trackstack']['push']($pyjs['track']);
				$pyjs['track']['module']='random';
				$pyjs['track']['lineno']=631;
				$pyjs['track']['lineno']=633;
				version = state['__getitem__']($constant_int_0);
				$pyjs['track']['lineno']=634;
				if ($p['bool']($p['op_eq'](version, $constant_int_1))) {
					$pyjs['track']['lineno']=635;
					var $tupleassign9 = $p['__ass_unpack'](state, 3, null);
					version = $tupleassign9[0];
					self['__is_instance__'] && typeof self['__setattr__'] == 'function' ? self['__setattr__']('_seed', $tupleassign9[1]) : $p['setattr'](self, '_seed', $tupleassign9[1]); 
					self['__is_instance__'] && typeof self['__setattr__'] == 'function' ? self['__setattr__']('gauss_next', $tupleassign9[2]) : $p['setattr'](self, 'gauss_next', $tupleassign9[2]); 
				}
				else {
					$pyjs['track']['lineno']=637;
					$pyjs['__active_exception_stack__'] = null;
					throw ($p['ValueError']($p['sprintf']('state with version %s passed to Random.setstate() of version %s', $p['tuple']([version, $p['getattr'](self, 'VERSION')]))));
				}
				$pyjs['trackstack']['pop']();$pyjs['track']=$pyjs['trackstack']['pop']();$pyjs['trackstack']['push']($pyjs['track']);
				return null;
			}
	, 1, [null,null,['self'],['state']]);
			$cls_definition['setstate'] = $method;
			$pyjs['track']['lineno']=641;
			$method = $pyjs__bind_method2('jumpahead', function(n) {
				if (this['__is_instance__'] === true) {
					var self = this;
					if ($pyjs['options']['arg_count'] && arguments['length'] != 1) $pyjs__exception_func_param(arguments['callee']['__name__'], 2, 2, arguments['length']+1);
				} else {
					var self = arguments[0];
					n = arguments[1];
					if ($pyjs['options']['arg_is_instance'] && self['__is_instance__'] !== true) $pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
					if ($pyjs['options']['arg_count'] && arguments['length'] != 2) $pyjs__exception_func_param(arguments['callee']['__name__'], 2, 2, arguments['length']);
				}
				if ($pyjs['options']['arg_instance_type']) {
					if (self.prototype['__md5__'] !== '3c4457779e36a98e6957a304fc6e4b5f') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}
				var $mod15,$mod20,$mod17,$mod16,$mod19,$mod18,$mul114,$mul113,$mul112,$mul111,$mul110,y,x,z,$mul109;
				$pyjs['track']={'module':'random', 'lineno':641};$pyjs['trackstack']['push']($pyjs['track']);
				$pyjs['track']['module']='random';
				$pyjs['track']['lineno']=641;
				$pyjs['track']['lineno']=655;
				if ($p['bool'](!$p['bool'](((($p['cmp'](n, $constant_int_0))|1) == 1)))) {
					$pyjs['track']['lineno']=656;
					$pyjs['__active_exception_stack__'] = null;
					throw ($p['ValueError']('n must be >= 0'));
				}
				$pyjs['track']['lineno']=657;
				var $tupleassign10 = $p['__ass_unpack']($p['getattr'](self, '_seed'), 3, null);
				x = $tupleassign10[0];
				y = $tupleassign10[1];
				z = $tupleassign10[2];
				$pyjs['track']['lineno']=658;
				x = (typeof ($mod15=$p['int']((typeof ($mul109=x)==typeof ($mul110=$p['pow']($constant_int_171, n, $constant_int_30269)) && typeof $mul109=='number'?
					$mul109*$mul110:
					$p['op_mul']($mul109,$mul110))))==typeof ($mod16=$constant_int_30269) && typeof $mod15=='number'?
					(($mod15=$mod15%$mod16)<0&&$mod16>0?$mod15+$mod16:$mod15):
					$p['op_mod']($mod15,$mod16));
				$pyjs['track']['lineno']=659;
				y = (typeof ($mod17=$p['int']((typeof ($mul111=y)==typeof ($mul112=$p['pow']($constant_int_172, n, $constant_int_30307)) && typeof $mul111=='number'?
					$mul111*$mul112:
					$p['op_mul']($mul111,$mul112))))==typeof ($mod18=$constant_int_30307) && typeof $mod17=='number'?
					(($mod17=$mod17%$mod18)<0&&$mod18>0?$mod17+$mod18:$mod17):
					$p['op_mod']($mod17,$mod18));
				$pyjs['track']['lineno']=660;
				z = (typeof ($mod19=$p['int']((typeof ($mul113=z)==typeof ($mul114=$p['pow']($constant_int_170, n, $constant_int_30323)) && typeof $mul113=='number'?
					$mul113*$mul114:
					$p['op_mul']($mul113,$mul114))))==typeof ($mod20=$constant_int_30323) && typeof $mod19=='number'?
					(($mod19=$mod19%$mod20)<0&&$mod20>0?$mod19+$mod20:$mod19):
					$p['op_mod']($mod19,$mod20));
				$pyjs['track']['lineno']=661;
				self['__is_instance__'] && typeof self['__setattr__'] == 'function' ? self['__setattr__']('_seed', $p['tuple']([x, y, z])) : $p['setattr'](self, '_seed', $p['tuple']([x, y, z])); 
				$pyjs['trackstack']['pop']();$pyjs['track']=$pyjs['trackstack']['pop']();$pyjs['trackstack']['push']($pyjs['track']);
				return null;
			}
	, 1, [null,null,['self'],['n']]);
			$cls_definition['jumpahead'] = $method;
			$pyjs['track']['lineno']=663;
			$method = $pyjs__bind_method2('__whseed', function(x, y, z) {
				if (this['__is_instance__'] === true) {
					var self = this;
					if ($pyjs['options']['arg_count'] && (arguments['length'] < 0 || arguments['length'] > 3)) $pyjs__exception_func_param(arguments['callee']['__name__'], 1, 4, arguments['length']+1);
				} else {
					var self = arguments[0];
					x = arguments[1];
					y = arguments[2];
					z = arguments[3];
					if ($pyjs['options']['arg_is_instance'] && self['__is_instance__'] !== true) $pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
					if ($pyjs['options']['arg_count'] && (arguments['length'] < 1 || arguments['length'] > 4)) $pyjs__exception_func_param(arguments['callee']['__name__'], 1, 4, arguments['length']);
				}
				if ($pyjs['options']['arg_instance_type']) {
					if (self.prototype['__md5__'] !== '3c4457779e36a98e6957a304fc6e4b5f') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}
				if (typeof x == 'undefined') x=arguments['callee']['__args__'][3][1];
				if (typeof y == 'undefined') y=arguments['callee']['__args__'][4][1];
				if (typeof z == 'undefined') z=arguments['callee']['__args__'][5][1];
				var $or14,$or9,$and3,$and4,$and5,$mul116,$mul115,$or12,$or11,t,$or13,time,$or10;
				$pyjs['track']={'module':'random', 'lineno':663};$pyjs['trackstack']['push']($pyjs['track']);
				$pyjs['track']['module']='random';
				$pyjs['track']['lineno']=663;
				$pyjs['track']['lineno']=668;
				if ($p['bool'](!$p['bool'](($p['op_eq']($p['type'](x), ($compare5 = $p['type'](y)))&&$p['op_eq']($compare5, ($compare6 = $p['type'](z)))&&$p['op_eq']($compare6, ($compare7 = $p['int'])))))) {
					$pyjs['track']['lineno']=669;
					$pyjs['__active_exception_stack__'] = null;
					throw ($p['TypeError']('seeds must be integers'));
				}
				$pyjs['track']['lineno']=670;
				if ($p['bool'](!$p['bool'](($p['bool']($and3=(($p['cmp']($constant_int_0, ($compare8 = x)) < 1)&&($p['cmp']($compare8, ($compare9 = $constant_int_256)) == -1)))?($p['bool']($and4=(($p['cmp']($constant_int_0, ($compare10 = y)) < 1)&&($p['cmp']($compare10, ($compare11 = $constant_int_256)) == -1)))?(($p['cmp']($constant_int_0, ($compare12 = z)) < 1)&&($p['cmp']($compare12, ($compare13 = $constant_int_256)) == -1)):$and4):$and3)))) {
					$pyjs['track']['lineno']=671;
					$pyjs['__active_exception_stack__'] = null;
					throw ($p['ValueError']('seeds must be in range(0, 256)'));
				}
				$pyjs['track']['lineno']=672;
				if ($p['bool'](($p['op_eq']($constant_int_0, ($compare14 = x))&&$p['op_eq']($compare14, ($compare15 = y))&&$p['op_eq']($compare15, ($compare16 = z))))) {
					$pyjs['track']['lineno']=674;
					$pyjs['track']={'module':$pyjs['track']['module'],'lineno':$pyjs['track']['lineno']};$pyjs['trackstack']['push']($pyjs['track']);
					time = $p['___import___']('time', null);
					$pyjs['trackstack']['pop']();$pyjs['track']=$pyjs['trackstack']['pop']();$pyjs['trackstack']['push']($pyjs['track']);
					$pyjs['track']['lineno']=675;
					t = $p['long']((typeof ($mul115=time['time']())==typeof ($mul116=$constant_int_256) && typeof $mul115=='number'?
						$mul115*$mul116:
						$p['op_mul']($mul115,$mul116)));
					$pyjs['track']['lineno']=676;
					t = $p['int']($p['op_bitxor2']($p['op_bitand2'](t, $constant_int_16777215), $p['op_bitshiftright'](t,$constant_int_24)));
					$pyjs['track']['lineno']=677;
					var $tupleassign11 = $p['__ass_unpack']($p['divmod'](t, $constant_int_256), 2, null);
					t = $tupleassign11[0];
					x = $tupleassign11[1];
					$pyjs['track']['lineno']=678;
					var $tupleassign12 = $p['__ass_unpack']($p['divmod'](t, $constant_int_256), 2, null);
					t = $tupleassign12[0];
					y = $tupleassign12[1];
					$pyjs['track']['lineno']=679;
					var $tupleassign13 = $p['__ass_unpack']($p['divmod'](t, $constant_int_256), 2, null);
					t = $tupleassign13[0];
					z = $tupleassign13[1];
				}
				$pyjs['track']['lineno']=681;
				self['__is_instance__'] && typeof self['__setattr__'] == 'function' ? self['__setattr__']('_seed', $p['tuple']([($p['bool']($or9=x)?$or9:$constant_int_1), ($p['bool']($or11=y)?$or11:$constant_int_1), ($p['bool']($or13=z)?$or13:$constant_int_1)])) : $p['setattr'](self, '_seed', $p['tuple']([($p['bool']($or9=x)?$or9:$constant_int_1), ($p['bool']($or11=y)?$or11:$constant_int_1), ($p['bool']($or13=z)?$or13:$constant_int_1)])); 
				$pyjs['track']['lineno']=683;
				self['__is_instance__'] && typeof self['__setattr__'] == 'function' ? self['__setattr__']('gauss_next', null) : $p['setattr'](self, 'gauss_next', null); 
				$pyjs['trackstack']['pop']();$pyjs['track']=$pyjs['trackstack']['pop']();$pyjs['trackstack']['push']($pyjs['track']);
				return null;
			}
	, 1, [null,null,['self'],['x', $constant_int_0],['y', $constant_int_0],['z', $constant_int_0]]);
			$cls_definition['__whseed'] = $method;
			$pyjs['track']['lineno']=685;
			$method = $pyjs__bind_method2('whseed', function(a) {
				if (this['__is_instance__'] === true) {
					var self = this;
					if ($pyjs['options']['arg_count'] && (arguments['length'] < 0 || arguments['length'] > 1)) $pyjs__exception_func_param(arguments['callee']['__name__'], 1, 2, arguments['length']+1);
				} else {
					var self = arguments[0];
					a = arguments[1];
					if ($pyjs['options']['arg_is_instance'] && self['__is_instance__'] !== true) $pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
					if ($pyjs['options']['arg_count'] && (arguments['length'] < 1 || arguments['length'] > 2)) $pyjs__exception_func_param(arguments['callee']['__name__'], 1, 2, arguments['length']);
				}
				if ($pyjs['options']['arg_instance_type']) {
					if (self.prototype['__md5__'] !== '3c4457779e36a98e6957a304fc6e4b5f') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}
				if (typeof a == 'undefined') a=arguments['callee']['__args__'][3][1];
				var $mod21,$mod22,$mod23,$mod24,$mod25,$mod26,$add65,$add67,$add66,$add69,$add68,$or20,$add70,$or15,$or17,$or16,y,x,z,$or19,$or18;
				$pyjs['track']={'module':'random', 'lineno':685};$pyjs['trackstack']['push']($pyjs['track']);
				$pyjs['track']['module']='random';
				$pyjs['track']['lineno']=685;
				$pyjs['track']['lineno']=696;
				if ($p['bool']($p['op_is'](a, null))) {
					$pyjs['track']['lineno']=697;
					self['__whseed']();
					$pyjs['track']['lineno']=698;
					$pyjs['track']['lineno']=698;
					var $pyjs__ret = null;
					$pyjs['trackstack']['pop']();$pyjs['track']=$pyjs['trackstack']['pop']();$pyjs['trackstack']['push']($pyjs['track']);
					return $pyjs__ret;
				}
				$pyjs['track']['lineno']=699;
				a = $p['hash'](a);
				$pyjs['track']['lineno']=700;
				var $tupleassign14 = $p['__ass_unpack']($p['divmod'](a, $constant_int_256), 2, null);
				a = $tupleassign14[0];
				x = $tupleassign14[1];
				$pyjs['track']['lineno']=701;
				var $tupleassign15 = $p['__ass_unpack']($p['divmod'](a, $constant_int_256), 2, null);
				a = $tupleassign15[0];
				y = $tupleassign15[1];
				$pyjs['track']['lineno']=702;
				var $tupleassign16 = $p['__ass_unpack']($p['divmod'](a, $constant_int_256), 2, null);
				a = $tupleassign16[0];
				z = $tupleassign16[1];
				$pyjs['track']['lineno']=703;
				x = ($p['bool']($or15=(typeof ($mod21=$p['__op_add']($add65=x,$add66=a))==typeof ($mod22=$constant_int_256) && typeof $mod21=='number'?
					(($mod21=$mod21%$mod22)<0&&$mod22>0?$mod21+$mod22:$mod21):
					$p['op_mod']($mod21,$mod22)))?$or15:$constant_int_1);
				$pyjs['track']['lineno']=704;
				y = ($p['bool']($or17=(typeof ($mod23=$p['__op_add']($add67=y,$add68=a))==typeof ($mod24=$constant_int_256) && typeof $mod23=='number'?
					(($mod23=$mod23%$mod24)<0&&$mod24>0?$mod23+$mod24:$mod23):
					$p['op_mod']($mod23,$mod24)))?$or17:$constant_int_1);
				$pyjs['track']['lineno']=705;
				z = ($p['bool']($or19=(typeof ($mod25=$p['__op_add']($add69=z,$add70=a))==typeof ($mod26=$constant_int_256) && typeof $mod25=='number'?
					(($mod25=$mod25%$mod26)<0&&$mod26>0?$mod25+$mod26:$mod25):
					$p['op_mod']($mod25,$mod26)))?$or19:$constant_int_1);
				$pyjs['track']['lineno']=706;
				self['__whseed'](x, y, z);
				$pyjs['trackstack']['pop']();$pyjs['track']=$pyjs['trackstack']['pop']();$pyjs['trackstack']['push']($pyjs['track']);
				return null;
			}
	, 1, [null,null,['self'],['a', null]]);
			$cls_definition['whseed'] = $method;
			$pyjs['track']['lineno']=561;
			var $bases = new Array($m['Random']);
			var $data = $p['dict']();
			for (var $item in $cls_definition) { $data['__setitem__']($item, $cls_definition[$item]); }
			return $p['_create_class']('WichmannHill', $p['tuple']($bases), $data);
		})();
		$pyjs['track']['lineno']=710;
		$m['SystemRandom'] = (function(){
			var $cls_definition = new Object();
			var $method;
			$cls_definition['__module__'] = 'random';
			$cls_definition['__md5__'] = 'f19b5feec5915beed5b5881421edfea5';
			$pyjs['track']['lineno']=718;
			$method = $pyjs__bind_method2('random', function() {
				if (this['__is_instance__'] === true) {
					var self = this;
					if ($pyjs['options']['arg_count'] && arguments['length'] != 0) $pyjs__exception_func_param(arguments['callee']['__name__'], 1, 1, arguments['length']+1);
				} else {
					var self = arguments[0];
					if ($pyjs['options']['arg_is_instance'] && self['__is_instance__'] !== true) $pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
					if ($pyjs['options']['arg_count'] && arguments['length'] != 1) $pyjs__exception_func_param(arguments['callee']['__name__'], 1, 1, arguments['length']);
				}
				if ($pyjs['options']['arg_instance_type']) {
					if (self.prototype['__md5__'] !== 'f19b5feec5915beed5b5881421edfea5') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}
				var $mul117,$mul118;
				$pyjs['track']={'module':'random', 'lineno':718};$pyjs['trackstack']['push']($pyjs['track']);
				$pyjs['track']['module']='random';
				$pyjs['track']['lineno']=718;
				$pyjs['track']['lineno']=720;
				$pyjs['track']['lineno']=720;
				var $pyjs__ret = (typeof ($mul117=$p['op_bitshiftright']($p['long']($m['_hexlify']($m['_urandom']($constant_int_7)), $constant_int_16),$constant_int_3))==typeof ($mul118=$m['RECIP_BPF']) && typeof $mul117=='number'?
					$mul117*$mul118:
					$p['op_mul']($mul117,$mul118));
				$pyjs['trackstack']['pop']();$pyjs['track']=$pyjs['trackstack']['pop']();$pyjs['trackstack']['push']($pyjs['track']);
				return $pyjs__ret;
			}
	, 1, [null,null,['self']]);
			$cls_definition['random'] = $method;
			$pyjs['track']['lineno']=722;
			$method = $pyjs__bind_method2('getrandbits', function(k) {
				if (this['__is_instance__'] === true) {
					var self = this;
					if ($pyjs['options']['arg_count'] && arguments['length'] != 1) $pyjs__exception_func_param(arguments['callee']['__name__'], 2, 2, arguments['length']+1);
				} else {
					var self = arguments[0];
					k = arguments[1];
					if ($pyjs['options']['arg_is_instance'] && self['__is_instance__'] !== true) $pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
					if ($pyjs['options']['arg_count'] && arguments['length'] != 2) $pyjs__exception_func_param(arguments['callee']['__name__'], 2, 2, arguments['length']);
				}
				if ($pyjs['options']['arg_instance_type']) {
					if (self.prototype['__md5__'] !== 'f19b5feec5915beed5b5881421edfea5') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}
				var $add72,$add71,bytes,$floordiv6,$floordiv5,$mul120,x,$sub62,$mul119,$sub61;
				$pyjs['track']={'module':'random', 'lineno':722};$pyjs['trackstack']['push']($pyjs['track']);
				$pyjs['track']['module']='random';
				$pyjs['track']['lineno']=722;
				$pyjs['track']['lineno']=724;
				if ($p['bool'](($p['cmp'](k, $constant_int_0) < 1))) {
					$pyjs['track']['lineno']=725;
					$pyjs['__active_exception_stack__'] = null;
					throw ($p['ValueError']('number of bits must be greater than zero'));
				}
				$pyjs['track']['lineno']=726;
				if ($p['bool'](!$p['op_eq'](k, $p['int'](k)))) {
					$pyjs['track']['lineno']=727;
					$pyjs['__active_exception_stack__'] = null;
					throw ($p['TypeError']('number of bits should be an integer'));
				}
				$pyjs['track']['lineno']=728;
				bytes = (typeof ($floordiv5=$p['__op_add']($add71=k,$add72=$constant_int_7))==typeof ($floordiv6=$constant_int_8) && typeof $floordiv5=='number' && $floordiv6 !== 0?
					Math['floor']($floordiv5/$floordiv6):
					$p['op_floordiv']($floordiv5,$floordiv6));
				$pyjs['track']['lineno']=729;
				x = $p['long']($m['_hexlify']($m['_urandom'](bytes)), $constant_int_16);
				$pyjs['track']['lineno']=730;
				$pyjs['track']['lineno']=730;
				var $pyjs__ret = $p['op_bitshiftright'](x,$p['__op_sub']($sub61=(typeof ($mul119=bytes)==typeof ($mul120=$constant_int_8) && typeof $mul119=='number'?
					$mul119*$mul120:
					$p['op_mul']($mul119,$mul120)),$sub62=k));
				$pyjs['trackstack']['pop']();$pyjs['track']=$pyjs['trackstack']['pop']();$pyjs['trackstack']['push']($pyjs['track']);
				return $pyjs__ret;
			}
	, 1, [null,null,['self'],['k']]);
			$cls_definition['getrandbits'] = $method;
			$pyjs['track']['lineno']=732;
			$method = $pyjs__bind_method2('_stub', function() {
				if (this['__is_instance__'] === true) {
					var self = this;
					var args = $p['tuple']($pyjs_array_slice['call'](arguments,0,arguments['length']-1));

					var kwds = arguments['length'] >= 1 ? arguments[arguments['length']-1] : arguments[arguments['length']];
					if (kwds === null || typeof kwds != 'object' || kwds['__name__'] != 'dict' || typeof kwds['$pyjs_is_kwarg'] == 'undefined') {
						if (typeof kwds != 'undefined') args['__array']['push'](kwds);
						var kwds = arguments[arguments['length']+1];
					} else {
						delete kwds['$pyjs_is_kwarg'];
					}
					if ($pyjs['options']['arg_count'] && arguments['length'] < 0) $pyjs__exception_func_param(arguments['callee']['__name__'], 1, null, arguments['length']+1);
				} else {
					var self = arguments[0];
					var args = $p['tuple']($pyjs_array_slice['call'](arguments,1,arguments['length']-1));

					var kwds = arguments['length'] >= 2 ? arguments[arguments['length']-1] : arguments[arguments['length']];
					if (kwds === null || typeof kwds != 'object' || kwds['__name__'] != 'dict' || typeof kwds['$pyjs_is_kwarg'] == 'undefined') {
						if (typeof kwds != 'undefined') args['__array']['push'](kwds);
						kwds = arguments[arguments['length']+1];
					} else {
						delete kwds['$pyjs_is_kwarg'];
					}
					if ($pyjs['options']['arg_is_instance'] && self['__is_instance__'] !== true) $pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
					if ($pyjs['options']['arg_count'] && arguments['length'] < 1) $pyjs__exception_func_param(arguments['callee']['__name__'], 1, null, arguments['length']);
				}
				if ($pyjs['options']['arg_instance_type']) {
					if (self.prototype['__md5__'] !== 'f19b5feec5915beed5b5881421edfea5') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}
				if (typeof kwds == 'undefined') {
					kwds = $p['__empty_dict']();
					if (typeof self != 'undefined') {
						if (self !== null && typeof self['$pyjs_is_kwarg'] != 'undefined') {
							kwds = self;
							self = arguments[1];
						}
					} else {
					}
				}

				$pyjs['track']={'module':'random', 'lineno':732};$pyjs['trackstack']['push']($pyjs['track']);
				$pyjs['track']['module']='random';
				$pyjs['track']['lineno']=732;
				$pyjs['track']['lineno']=734;
				$pyjs['track']['lineno']=734;
				var $pyjs__ret = null;
				$pyjs['trackstack']['pop']();$pyjs['track']=$pyjs['trackstack']['pop']();$pyjs['trackstack']['push']($pyjs['track']);
				return $pyjs__ret;
			}
	, 1, ['args',['kwds'],['self']]);
			$cls_definition['_stub'] = $method;
			$pyjs['track']['lineno']=735;
			$cls_definition['$assign1'] = $p['staticmethod']($cls_definition['_stub']);
			$cls_definition['seed'] = $cls_definition['$assign1'];
			$cls_definition['jumpahead'] = $cls_definition['$assign1'];
			$pyjs['track']['lineno']=737;
			$method = $pyjs__bind_method2('_notimplemented', function() {
				if (this['__is_instance__'] === true) {
					var self = this;
					var args = $p['tuple']($pyjs_array_slice['call'](arguments,0,arguments['length']-1));

					var kwds = arguments['length'] >= 1 ? arguments[arguments['length']-1] : arguments[arguments['length']];
					if (kwds === null || typeof kwds != 'object' || kwds['__name__'] != 'dict' || typeof kwds['$pyjs_is_kwarg'] == 'undefined') {
						if (typeof kwds != 'undefined') args['__array']['push'](kwds);
						var kwds = arguments[arguments['length']+1];
					} else {
						delete kwds['$pyjs_is_kwarg'];
					}
					if ($pyjs['options']['arg_count'] && arguments['length'] < 0) $pyjs__exception_func_param(arguments['callee']['__name__'], 1, null, arguments['length']+1);
				} else {
					var self = arguments[0];
					var args = $p['tuple']($pyjs_array_slice['call'](arguments,1,arguments['length']-1));

					var kwds = arguments['length'] >= 2 ? arguments[arguments['length']-1] : arguments[arguments['length']];
					if (kwds === null || typeof kwds != 'object' || kwds['__name__'] != 'dict' || typeof kwds['$pyjs_is_kwarg'] == 'undefined') {
						if (typeof kwds != 'undefined') args['__array']['push'](kwds);
						kwds = arguments[arguments['length']+1];
					} else {
						delete kwds['$pyjs_is_kwarg'];
					}
					if ($pyjs['options']['arg_is_instance'] && self['__is_instance__'] !== true) $pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
					if ($pyjs['options']['arg_count'] && arguments['length'] < 1) $pyjs__exception_func_param(arguments['callee']['__name__'], 1, null, arguments['length']);
				}
				if ($pyjs['options']['arg_instance_type']) {
					if (self.prototype['__md5__'] !== 'f19b5feec5915beed5b5881421edfea5') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}
				if (typeof kwds == 'undefined') {
					kwds = $p['__empty_dict']();
					if (typeof self != 'undefined') {
						if (self !== null && typeof self['$pyjs_is_kwarg'] != 'undefined') {
							kwds = self;
							self = arguments[1];
						}
					} else {
					}
				}

				$pyjs['track']={'module':'random', 'lineno':737};$pyjs['trackstack']['push']($pyjs['track']);
				$pyjs['track']['module']='random';
				$pyjs['track']['lineno']=737;
				$pyjs['track']['lineno']=739;
				$pyjs['__active_exception_stack__'] = null;
				throw ($p['NotImplementedError']('System entropy source does not have state.'));
				$pyjs['trackstack']['pop']();$pyjs['track']=$pyjs['trackstack']['pop']();$pyjs['trackstack']['push']($pyjs['track']);
				return null;
			}
	, 1, ['args',['kwds'],['self']]);
			$cls_definition['_notimplemented'] = $method;
			$pyjs['track']['lineno']=740;
			$cls_definition['$assign2'] = $p['staticmethod']($cls_definition['_notimplemented']);
			$cls_definition['getstate'] = $cls_definition['$assign2'];
			$cls_definition['setstate'] = $cls_definition['$assign2'];
			$pyjs['track']['lineno']=710;
			var $bases = new Array($m['Random']);
			var $data = $p['dict']();
			for (var $item in $cls_definition) { $data['__setitem__']($item, $cls_definition[$item]); }
			return $p['_create_class']('SystemRandom', $p['tuple']($bases), $data);
		})();
		$pyjs['track']['lineno']=744;
		$m['_test_generator'] = function(n, func, args) {
			if ($pyjs['options']['arg_count'] && arguments['length'] != 3) $pyjs__exception_func_param(arguments['callee']['__name__'], 3, 3, arguments['length']);
			var $iter5_nextval,$iter5_array,$iter5_idx,t1,$iter5_iter,sqsum,$sub66,$iter5_type,$sub64,total,$sub63,avg,smallest,largest,$div42,$div44,$mul124,$mul122,$mul123,$mul121,$add76,$add74,$add75,$div43,$add73,$div41,i,t0,time,stddev,$pyjs__trackstack_size_1,$sub65,x;
			$pyjs['track']={'module':'random','lineno':744};$pyjs['trackstack']['push']($pyjs['track']);
			$pyjs['track']['module']='random';
			$pyjs['track']['lineno']=744;
			$pyjs['track']['lineno']=745;
			$pyjs['track']={'module':$pyjs['track']['module'],'lineno':$pyjs['track']['lineno']};$pyjs['trackstack']['push']($pyjs['track']);
			time = $p['___import___']('time', null);
			$pyjs['trackstack']['pop']();$pyjs['track']=$pyjs['trackstack']['pop']();$pyjs['trackstack']['push']($pyjs['track']);
			$pyjs['track']['lineno']=746;
			$p['printFunc']([n, 'times', $p['getattr'](func, '__name__')], 1);
			$pyjs['track']['lineno']=747;
			total = 0.0;
			$pyjs['track']['lineno']=748;
			sqsum = 0.0;
			$pyjs['track']['lineno']=749;
			smallest = 10000000000.0;
			$pyjs['track']['lineno']=750;
			largest = (typeof ($usub10=10000000000.0)=='number'?
				-$usub10:
				$p['op_usub']($usub10));
			$pyjs['track']['lineno']=751;
			t0 = time['time']();
			$pyjs['track']['lineno']=752;
			$pyjs__trackstack_size_1=$pyjs['trackstack']['length'];
			$iter5_iter = $p['range'](n);
			$iter5_nextval=$p['__iter_prepare']($iter5_iter,false);
			while (typeof($p['__wrapped_next']($iter5_nextval)['$nextval']) != 'undefined') {
				i = $iter5_nextval['$nextval'];
				$pyjs['track']['lineno']=753;
				x = $pyjs_kwargs_call(null, func, args, null, [{}]);
				$pyjs['track']['lineno']=754;
				total = $p['__op_add']($add73=total,$add74=x);
				$pyjs['track']['lineno']=755;
				sqsum = $p['__op_add']($add75=sqsum,$add76=(typeof ($mul121=x)==typeof ($mul122=x) && typeof $mul121=='number'?
					$mul121*$mul122:
					$p['op_mul']($mul121,$mul122)));
				$pyjs['track']['lineno']=756;
				smallest = $p['min'](x, smallest);
				$pyjs['track']['lineno']=757;
				largest = $p['max'](x, largest);
			}
			if ($pyjs['trackstack']['length'] > $pyjs__trackstack_size_1) {
				$pyjs['trackstack'] = $pyjs['trackstack']['slice'](0,$pyjs__trackstack_size_1);
				$pyjs['track'] = $pyjs['trackstack']['slice'](-1)[0];
			}
			$pyjs['track']['module']='random';
			$pyjs['track']['lineno']=758;
			t1 = time['time']();
			$pyjs['track']['lineno']=759;
			$p['printFunc']([$p['round']($p['__op_sub']($sub63=t1,$sub64=t0), $constant_int_3), 'sec,'], 0);
			$pyjs['track']['lineno']=760;
			avg = (typeof ($div41=total)==typeof ($div42=n) && typeof $div41=='number' && $div42 !== 0?
				$div41/$div42:
				$p['op_div']($div41,$div42));
			$pyjs['track']['lineno']=761;
			stddev = $m['_sqrt']($p['__op_sub']($sub65=(typeof ($div43=sqsum)==typeof ($div44=n) && typeof $div43=='number' && $div44 !== 0?
				$div43/$div44:
				$p['op_div']($div43,$div44)),$sub66=(typeof ($mul123=avg)==typeof ($mul124=avg) && typeof $mul123=='number'?
				$mul123*$mul124:
				$p['op_mul']($mul123,$mul124))));
			$pyjs['track']['lineno']=762;
			$p['printFunc']([$p['sprintf']('avg %g, stddev %g, min %g, max %g', $p['tuple']([avg, stddev, smallest, largest]))], 1);
			$pyjs['trackstack']['pop']();$pyjs['track']=$pyjs['trackstack']['pop']();$pyjs['trackstack']['push']($pyjs['track']);
			return null;
		};
		$m['_test_generator']['__name__'] = '_test_generator';

		$m['_test_generator']['__bind_type__'] = 0;
		$m['_test_generator']['__args__'] = [null,null,['n'],['func'],['args']];
		$pyjs['track']['lineno']=766;
		$m['_test'] = function(N) {
			if ($pyjs['options']['arg_count'] && (arguments['length'] < 0 || arguments['length'] > 1)) $pyjs__exception_func_param(arguments['callee']['__name__'], 0, 1, arguments['length']);
			if (typeof N == 'undefined') N=arguments['callee']['__args__'][2][1];
			var $div46,$div45;
			$pyjs['track']={'module':'random','lineno':766};$pyjs['trackstack']['push']($pyjs['track']);
			$pyjs['track']['module']='random';
			$pyjs['track']['lineno']=766;
			$pyjs['track']['lineno']=767;
			$m['_test_generator'](N, (typeof random == "undefined"?$m['random']:random), $p['tuple']([]));
			$pyjs['track']['lineno']=768;
			$m['_test_generator'](N, (typeof normalvariate == "undefined"?$m['normalvariate']:normalvariate), $p['tuple']([0.0, 1.0]));
			$pyjs['track']['lineno']=769;
			$m['_test_generator'](N, (typeof lognormvariate == "undefined"?$m['lognormvariate']:lognormvariate), $p['tuple']([0.0, 1.0]));
			$pyjs['track']['lineno']=770;
			$m['_test_generator'](N, (typeof vonmisesvariate == "undefined"?$m['vonmisesvariate']:vonmisesvariate), $p['tuple']([0.0, 1.0]));
			$pyjs['track']['lineno']=771;
			$m['_test_generator'](N, (typeof gammavariate == "undefined"?$m['gammavariate']:gammavariate), $p['tuple']([0.01, 1.0]));
			$pyjs['track']['lineno']=772;
			$m['_test_generator'](N, (typeof gammavariate == "undefined"?$m['gammavariate']:gammavariate), $p['tuple']([0.1, 1.0]));
			$pyjs['track']['lineno']=773;
			$m['_test_generator'](N, (typeof gammavariate == "undefined"?$m['gammavariate']:gammavariate), $p['tuple']([0.1, 2.0]));
			$pyjs['track']['lineno']=774;
			$m['_test_generator'](N, (typeof gammavariate == "undefined"?$m['gammavariate']:gammavariate), $p['tuple']([0.5, 1.0]));
			$pyjs['track']['lineno']=775;
			$m['_test_generator'](N, (typeof gammavariate == "undefined"?$m['gammavariate']:gammavariate), $p['tuple']([0.9, 1.0]));
			$pyjs['track']['lineno']=776;
			$m['_test_generator'](N, (typeof gammavariate == "undefined"?$m['gammavariate']:gammavariate), $p['tuple']([1.0, 1.0]));
			$pyjs['track']['lineno']=777;
			$m['_test_generator'](N, (typeof gammavariate == "undefined"?$m['gammavariate']:gammavariate), $p['tuple']([2.0, 1.0]));
			$pyjs['track']['lineno']=778;
			$m['_test_generator'](N, (typeof gammavariate == "undefined"?$m['gammavariate']:gammavariate), $p['tuple']([20.0, 1.0]));
			$pyjs['track']['lineno']=779;
			$m['_test_generator'](N, (typeof gammavariate == "undefined"?$m['gammavariate']:gammavariate), $p['tuple']([200.0, 1.0]));
			$pyjs['track']['lineno']=780;
			$m['_test_generator'](N, (typeof gauss == "undefined"?$m['gauss']:gauss), $p['tuple']([0.0, 1.0]));
			$pyjs['track']['lineno']=781;
			$m['_test_generator'](N, (typeof betavariate == "undefined"?$m['betavariate']:betavariate), $p['tuple']([3.0, 3.0]));
			$pyjs['track']['lineno']=782;
			$m['_test_generator'](N, (typeof triangular == "undefined"?$m['triangular']:triangular), $p['tuple']([0.0, 1.0, (typeof ($div45=1.0)==typeof ($div46=3.0) && typeof $div45=='number' && $div46 !== 0?
				$div45/$div46:
				$p['op_div']($div45,$div46))]));
			$pyjs['trackstack']['pop']();$pyjs['track']=$pyjs['trackstack']['pop']();$pyjs['trackstack']['push']($pyjs['track']);
			return null;
		};
		$m['_test']['__name__'] = '_test';

		$m['_test']['__bind_type__'] = 0;
		$m['_test']['__args__'] = [null,null,['N', $constant_int_2000]];
		$pyjs['track']['lineno']=790;
		$m['_inst'] = $m['Random']();
		$pyjs['track']['lineno']=791;
		$m['seed'] = $p['getattr']($m['_inst'], 'seed');
		$pyjs['track']['lineno']=792;
		$m['random'] = $p['getattr']($m['_inst'], 'random');
		$pyjs['track']['lineno']=793;
		$m['uniform'] = $p['getattr']($m['_inst'], 'uniform');
		$pyjs['track']['lineno']=794;
		$m['triangular'] = $p['getattr']($m['_inst'], 'triangular');
		$pyjs['track']['lineno']=795;
		$m['randint'] = $p['getattr']($m['_inst'], 'randint');
		$pyjs['track']['lineno']=796;
		$m['choice'] = $p['getattr']($m['_inst'], 'choice');
		$pyjs['track']['lineno']=797;
		$m['randrange'] = $p['getattr']($m['_inst'], 'randrange');
		$pyjs['track']['lineno']=798;
		$m['sample'] = $p['getattr']($m['_inst'], 'sample');
		$pyjs['track']['lineno']=799;
		$m['shuffle'] = $p['getattr']($m['_inst'], 'shuffle');
		$pyjs['track']['lineno']=800;
		$m['normalvariate'] = $p['getattr']($m['_inst'], 'normalvariate');
		$pyjs['track']['lineno']=801;
		$m['lognormvariate'] = $p['getattr']($m['_inst'], 'lognormvariate');
		$pyjs['track']['lineno']=802;
		$m['expovariate'] = $p['getattr']($m['_inst'], 'expovariate');
		$pyjs['track']['lineno']=803;
		$m['vonmisesvariate'] = $p['getattr']($m['_inst'], 'vonmisesvariate');
		$pyjs['track']['lineno']=804;
		$m['gammavariate'] = $p['getattr']($m['_inst'], 'gammavariate');
		$pyjs['track']['lineno']=805;
		$m['gauss'] = $p['getattr']($m['_inst'], 'gauss');
		$pyjs['track']['lineno']=806;
		$m['betavariate'] = $p['getattr']($m['_inst'], 'betavariate');
		$pyjs['track']['lineno']=807;
		$m['paretovariate'] = $p['getattr']($m['_inst'], 'paretovariate');
		$pyjs['track']['lineno']=808;
		$m['weibullvariate'] = $p['getattr']($m['_inst'], 'weibullvariate');
		$pyjs['track']['lineno']=809;
		$m['getstate'] = $p['getattr']($m['_inst'], 'getstate');
		$pyjs['track']['lineno']=810;
		$m['setstate'] = $p['getattr']($m['_inst'], 'setstate');
		$pyjs['track']['lineno']=811;
		$m['jumpahead'] = $p['getattr']($m['_inst'], 'jumpahead');
		$pyjs['track']['lineno']=812;
		$m['getrandbits'] = $p['getattr']($m['_inst'], 'getrandbits');
		$pyjs['track']['lineno']=814;
		if ($p['bool']($p['op_eq']((typeof __name__ == "undefined"?$m['__name__']:__name__), '__main__'))) {
			$pyjs['track']['lineno']=815;
			$m['_test']();
		}
	} catch ($pyjs_attr_err) {throw $p['_errorMapping']($pyjs_attr_err);};
	return this;
}; /* end random */


/* end module: random */


/*
PYJS_DEPS: ['math.log', 'math', 'math.exp', 'math.pi', 'math.e', 'math.ceil', 'math.sqrt', 'math.acos', 'math.cos', 'math.sin', 'os.urandom', 'os', 'binascii.hexlify', 'binascii', '_random', 'time']
*/
