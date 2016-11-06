/* start module: game3 */
$pyjs['loaded_modules']['game3'] = function (__mod_name__) {
	if($pyjs['loaded_modules']['game3']['__was_initialized__']) return $pyjs['loaded_modules']['game3'];
	var $m = $pyjs['loaded_modules']['game3'];
	$m['__repr__'] = function() { return '<module: game3>'; };
	$m['__was_initialized__'] = true;
	if ((__mod_name__ === null) || (typeof __mod_name__ == 'undefined')) __mod_name__ = 'game3';
	$m['__name__'] = __mod_name__;
	$m.__track_lines__ = new Array();
	try {
		$m.__track_lines__[1] = 'game3.py, line 1:\n    import random, time, sys';
		$m.__track_lines__[3] = 'game3.py, line 3:\n    from pygame.locals import *';
		$m.__track_lines__[4] = 'game3.py, line 4:\n    import pyjsdl as pygame';
		$m.__track_lines__[7] = 'game3.py, line 7:\n    WINDOWWIDTH = 500';
		$m.__track_lines__[8] = 'game3.py, line 8:\n    WINDOWHEIGHT = 700';
		$m.__track_lines__[9] = 'game3.py, line 9:\n    boardArrHeight = 200;';
		$m.__track_lines__[10] = 'game3.py, line 10:\n    boardArr = []';
		$m.__track_lines__[11] = 'game3.py, line 11:\n    posX = 5 #chracter position';
		$m.__track_lines__[12] = 'game3.py, line 12:\n    posY = 0';
		$m.__track_lines__[13] = 'game3.py, line 13:\n    direction = "down"';
		$m.__track_lines__[14] = 'game3.py, line 14:\n    score = 0';
		$m.__track_lines__[15] = 'game3.py, line 15:\n    stomachSpace = 100';
		$m.__track_lines__[16] = 'game3.py, line 16:\n    numLives = 0';
		$m.__track_lines__[17] = 'game3.py, line 17:\n    collapseGroupHolder = [[0]*10]*boardArrHeight';
		$m.__track_lines__[19] = 'game3.py, line 19:\n    def initBoardArr():';
		$m.__track_lines__[20] = 'game3.py, line 20:\n    global boardArr';
		$m.__track_lines__[21] = "game3.py, line 21:\n    with open('boardArr.txt') as f:";
		$m.__track_lines__[22] = 'game3.py, line 22:\n    for line in f:';
		$m.__track_lines__[24] = "game3.py, line 24:\n    inner_list = line.rstrip('\\n').split(' ')";
		$m.__track_lines__[25] = 'game3.py, line 25:\n    innerListInts = [int(numeric_string) for numeric_string in inner_list]';
		$m.__track_lines__[28] = 'game3.py, line 28:\n    boardArr.append(innerListInts)';
		$m.__track_lines__[29] = 'game3.py, line 29:\n    print boardArr';
		$m.__track_lines__[30] = 'game3.py, line 30:\n    print "** ", boardArr[0]';
		$m.__track_lines__[31] = 'game3.py, line 31:\n    print "**** ", boardArr[0][0]';
		$m.__track_lines__[33] = 'game3.py, line 33:\n    def main():';
		$m.__track_lines__[34] = 'game3.py, line 34:\n    global FPSCLOCK, DISPLAYSURF, BASICFONT, BIGFONT';
		$m.__track_lines__[35] = 'game3.py, line 35:\n    pygame.init()';
		$m.__track_lines__[36] = 'game3.py, line 36:\n    print "in main"';
		$m.__track_lines__[37] = 'game3.py, line 37:\n    FPSCLOCK = pygame.time.Clock()';
		$m.__track_lines__[38] = 'game3.py, line 38:\n    DISPLAYSURF = pygame.display.set_mode((WINDOWWIDTH, WINDOWHEIGHT))';
		$m.__track_lines__[39] = 'game3.py, line 39:\n    DISPLAYSURF.fill((255,255,255))';
		$m.__track_lines__[40] = "game3.py, line 40:\n    BASICFONT = pygame.font.Font('freesansbold.ttf', 18)";
		$m.__track_lines__[41] = "game3.py, line 41:\n    BIGFONT = pygame.font.Font('freesansbold.ttf', 100)";
		$m.__track_lines__[42] = "game3.py, line 42:\n    pygame.display.set_caption('Cotton Candy')";
		$m.__track_lines__[43] = 'game3.py, line 43:\n    initBoardArr()';
		$m.__track_lines__[44] = 'game3.py, line 44:\n    renderScreen()';
		$m.__track_lines__[45] = 'game3.py, line 45:\n    while True: # game loop';
		$m.__track_lines__[46] = 'game3.py, line 46:\n    runGame()';
		$m.__track_lines__[47] = "game3.py, line 47:\n    showTextScreen('Game Over')";
		$m.__track_lines__[48] = 'game3.py, line 48:\n    def runGame():';
		$m.__track_lines__[49] = 'game3.py, line 49:\n    global posX, posY,direction';
		$m.__track_lines__[50] = 'game3.py, line 50:\n    while True:';
		$m.__track_lines__[51] = 'game3.py, line 51:\n    collapse() #may be superfluous';
		$m.__track_lines__[52] = 'game3.py, line 52:\n    for event in pygame.event.get(): # event handling loop';
		$m.__track_lines__[53] = 'game3.py, line 53:\n    if event.type == KEYDOWN:';
		$m.__track_lines__[54] = 'game3.py, line 54:\n    if (event.key == K_LEFT or event.key == K_a):';
		$m.__track_lines__[55] = 'game3.py, line 55:\n    print "left pressed"';
		$m.__track_lines__[56] = 'game3.py, line 56:\n    if(direction == "left"):';
		$m.__track_lines__[57] = 'game3.py, line 57:\n    move(direction)';
		$m.__track_lines__[58] = 'game3.py, line 58:\n    direction = "left"';
		$m.__track_lines__[60] = 'game3.py, line 60:\n    print "right pressed"';
		$m.__track_lines__[61] = 'game3.py, line 61:\n    if(direction == "right"):';
		$m.__track_lines__[62] = 'game3.py, line 62:\n    move(direction)';
		$m.__track_lines__[63] = 'game3.py, line 63:\n    direction = "right"';
		$m.__track_lines__[65] = 'game3.py, line 65:\n    print "up pressed"';
		$m.__track_lines__[66] = 'game3.py, line 66:\n    direction == "up"';
		$m.__track_lines__[68] = 'game3.py, line 68:\n    print "down pressed"';
		$m.__track_lines__[69] = 'game3.py, line 69:\n    if(direction == "down"):';
		$m.__track_lines__[70] = 'game3.py, line 70:\n    move(direction)';
		$m.__track_lines__[71] = 'game3.py, line 71:\n    direction = "down"';
		$m.__track_lines__[73] = 'game3.py, line 73:\n    print "eating direction is ", direction';
		$m.__track_lines__[74] = 'game3.py, line 74:\n    eat(direction)';
		$m.__track_lines__[75] = 'game3.py, line 75:\n    renderScreen()';
		$m.__track_lines__[76] = 'game3.py, line 76:\n    def canEat(goal):';
		$m.__track_lines__[77] = 'game3.py, line 77:\n    global boardArr';
		$m.__track_lines__[78] = 'game3.py, line 78:\n    if goal[0] < 0 or goal[1] < 0 or goal[1] >=10:';
		$m.__track_lines__[79] = 'game3.py, line 79:\n    print "cant eat because off screen"';
		$m.__track_lines__[80] = 'game3.py, line 80:\n    return False';
		$m.__track_lines__[81] = 'game3.py, line 81:\n    row = goal[0]';
		$m.__track_lines__[82] = 'game3.py, line 82:\n    col = goal[1]';
		$m.__track_lines__[83] = 'game3.py, line 83:\n    if boardArr[row][col] == 0:';
		$m.__track_lines__[84] = 'game3.py, line 84:\n    print "cant eat because empty there: " ,direction';
		$m.__track_lines__[85] = 'game3.py, line 85:\n    return False';
		$m.__track_lines__[87] = 'game3.py, line 87:\n    return True';
		$m.__track_lines__[90] = 'game3.py, line 90:\n    def eat(direction):';
		$m.__track_lines__[91] = 'game3.py, line 91:\n    global posX,posY,boardArr,stomachSpace, score';
		$m.__track_lines__[92] = 'game3.py, line 92:\n    goal = (0,0)';
		$m.__track_lines__[93] = 'game3.py, line 93:\n    if direction == "right":';
		$m.__track_lines__[94] = 'game3.py, line 94:\n    goal = (posY,posX+1)';
		$m.__track_lines__[96] = 'game3.py, line 96:\n    goal = (posY,posX-1)';
		$m.__track_lines__[98] = 'game3.py, line 98:\n    goal = (posY+1,posX)';
		$m.__track_lines__[101] = 'game3.py, line 101:\n    if canEat(goal):';
		$m.__track_lines__[102] = 'game3.py, line 102:\n    stomachSpace -= 1';
		$m.__track_lines__[103] = 'game3.py, line 103:\n    row = goal[0]';
		$m.__track_lines__[104] = 'game3.py, line 104:\n    col = goal[1]';
		$m.__track_lines__[105] = 'game3.py, line 105:\n    getEatGroup(goal,boardArr[row][col])';
		$m.__track_lines__[108] = 'game3.py, line 108:\n    collapse()';
		$m.__track_lines__[109] = 'game3.py, line 109:\n    renderScreen()';
		$m.__track_lines__[111] = 'game3.py, line 111:\n    def getEatGroup(goal,tileType):';
		$m.__track_lines__[112] = 'game3.py, line 112:\n    global boardArr, score';
		$m.__track_lines__[113] = 'game3.py, line 113:\n    row = goal[0]';
		$m.__track_lines__[114] = 'game3.py, line 114:\n    col = goal[1]';
		$m.__track_lines__[115] = 'game3.py, line 115:\n    print "tile type is: ",boardArr[row][col]';
		$m.__track_lines__[117] = 'game3.py, line 117:\n    boardArr[row][col] = 0';
		$m.__track_lines__[118] = 'game3.py, line 118:\n    score += 1';
		$m.__track_lines__[119] = 'game3.py, line 119:\n    if col+1 < 10 and boardArr[row][col+1] == tileType:';
		$m.__track_lines__[120] = 'game3.py, line 120:\n    getEatGroup((row,col+1),tileType)';
		$m.__track_lines__[121] = 'game3.py, line 121:\n    if col-1 >= 0 and boardArr[row][col-1] == tileType:';
		$m.__track_lines__[122] = 'game3.py, line 122:\n    getEatGroup((row,col-1),tileType)';
		$m.__track_lines__[123] = 'game3.py, line 123:\n    if boardArr[row+1][col] == tileType:';
		$m.__track_lines__[124] = 'game3.py, line 124:\n    getEatGroup((row+1,col),tileType)';
		$m.__track_lines__[125] = 'game3.py, line 125:\n    if row-1 >= 0 and boardArr[row-1][col] == tileType:';
		$m.__track_lines__[126] = 'game3.py, line 126:\n    getEatGroup((row-1,col),tileType)';
		$m.__track_lines__[129] = 'game3.py, line 129:\n    def collapsable(row,col,num):';
		$m.__track_lines__[130] = 'game3.py, line 130:\n    global boardArr';
		$m.__track_lines__[131] = 'game3.py, line 131:\n    sameType = boardArr[row][col]';
		$m.__track_lines__[132] = 'game3.py, line 132:\n    if sameType == 0:';
		$m.__track_lines__[133] = 'game3.py, line 133:\n    return False';
		$m.__track_lines__[134] = 'game3.py, line 134:\n    if col+1 <10 and (boardArr[row][col+1] == sameType or num>0): #right one';
		$m.__track_lines__[135] = 'game3.py, line 135:\n    if not collapsable(row,col+1,num+1):';
		$m.__track_lines__[136] = 'game3.py, line 136:\n    return False';
		$m.__track_lines__[137] = 'game3.py, line 137:\n    if row-1>=0 and (boardArr[row-1][col] == sameType or num>0):';
		$m.__track_lines__[138] = 'game3.py, line 138:\n    if not collapsable(row-1,col,num+1):';
		$m.__track_lines__[139] = 'game3.py, line 139:\n    return False';
		$m.__track_lines__[140] = 'game3.py, line 140:\n    return True';
		$m.__track_lines__[142] = 'game3.py, line 142:\n    def getCollapseGroup(row,col,tileType): #new group collapsing methods is ???';
		$m.__track_lines__[143] = 'game3.py, line 143:\n    global boardArr, score, collapseGroupHolder';
		$m.__track_lines__[144] = 'game3.py, line 144:\n    group = []';
		$m.__track_lines__[145] = 'game3.py, line 145:\n    done = 0';
		$m.__track_lines__[146] = 'game3.py, line 146:\n    if collapseGroupHolder[row][col] == 0:';
		$m.__track_lines__[147] = 'game3.py, line 147:\n    group.append((row,col))';
		$m.__track_lines__[148] = 'game3.py, line 148:\n    collapseGroupHolder[row][col] = 1';
		$m.__track_lines__[149] = 'game3.py, line 149:\n    if col+1 < 10 and boardArr[row][col+1] == tileType and collapseGroupHolder[row][col+1] == 0:';
		$m.__track_lines__[150] = 'game3.py, line 150:\n    group.extend(getCollapseGroup(row,col+1,tileType))';
		$m.__track_lines__[151] = 'game3.py, line 151:\n    if col-1 >= 0 and boardArr[row][col-1] == tileType and collapseGroupHolder[row][col-1] == 0:';
		$m.__track_lines__[152] = 'game3.py, line 152:\n    group.extend(getCollapseGroup(row,col-1,tileType))';
		$m.__track_lines__[153] = 'game3.py, line 153:\n    if row+1 < boardArrHeight and boardArr[row+1][col] == tileType and collapseGroupHolder[row+1][col] == 0:';
		$m.__track_lines__[154] = 'game3.py, line 154:\n    group.extend(getCollapseGroup(row+1,col,tileType))';
		$m.__track_lines__[155] = 'game3.py, line 155:\n    if row-1 >= 0 and boardArr[row-1][col] == tileType and collapseGroupHolder[row-1][col] == 0:';
		$m.__track_lines__[156] = 'game3.py, line 156:\n    group.extend(getCollapseGroup(row-1,col,tileType))';
		$m.__track_lines__[159] = 'game3.py, line 159:\n    return group';
		$m.__track_lines__[161] = 'game3.py, line 161:\n    def canCollapse(group):';
		$m.__track_lines__[162] = 'game3.py, line 162:\n    global boardArr';
		$m.__track_lines__[163] = 'game3.py, line 163:\n    can = True';
		$m.__track_lines__[164] = 'game3.py, line 164:\n    for i in group:';
		$m.__track_lines__[165] = 'game3.py, line 165:\n    if (i[0]+1,i[1]) not in group and i[0]+1 < boardArrHeight and boardArr[i[0]+1][i[1]] != 0:';
		$m.__track_lines__[166] = 'game3.py, line 166:\n    can = False';
		$m.__track_lines__[169] = 'game3.py, line 169:\n    return can';
		$m.__track_lines__[171] = 'game3.py, line 171:\n    def collapseGroup(group):';
		$m.__track_lines__[172] = 'game3.py, line 172:\n    global boardArr';
		$m.__track_lines__[173] = 'game3.py, line 173:\n    for i in group:';
		$m.__track_lines__[174] = 'game3.py, line 174:\n    if i[0]+1 < boardArrHeight:';
		$m.__track_lines__[175] = 'game3.py, line 175:\n    boardArr[i[0]+1][i[1]] = boardArr[i[0]][i[1]]';
		$m.__track_lines__[176] = 'game3.py, line 176:\n    boardArr[i[0]][i[1]] = 0';
		$m.__track_lines__[178] = 'game3.py, line 178:\n    def collapse():';
		$m.__track_lines__[179] = 'game3.py, line 179:\n    global posX,posY,boardArr, collapseGroupHolder';
		$m.__track_lines__[180] = 'game3.py, line 180:\n    for i in xrange(0,boardArrHeight-1): #can make faster by starting dif pos';
		$m.__track_lines__[181] = 'game3.py, line 181:\n    for j in xrange(0,10):';
		$m.__track_lines__[182] = 'game3.py, line 182:\n    startPos = 300-posY*50';
		$m.__track_lines__[183] = 'game3.py, line 183:\n    if startPos+i*50 > 1000:';
		$m.__track_lines__[184] = 'game3.py, line 184:\n    break';
		$m.__track_lines__[185] = 'game3.py, line 185:\n    collapseGroupHolder =  [[0]*10]*boardArrHeight';
		$m.__track_lines__[186] = 'game3.py, line 186:\n    group = getCollapseGroup(i,j,boardArr[i][j])';
		$m.__track_lines__[187] = 'game3.py, line 187:\n    if canCollapse(group):';
		$m.__track_lines__[188] = 'game3.py, line 188:\n    collapseGroup(group)';
		$m.__track_lines__[191] = 'game3.py, line 191:\n    collapseCharacter()';
		$m.__track_lines__[193] = 'game3.py, line 193:\n    def collapseCharacter():';
		$m.__track_lines__[194] = 'game3.py, line 194:\n    global posX,posY,boardArr';
		$m.__track_lines__[195] = 'game3.py, line 195:\n    while (boardArr[posY+1][posX] == 0):';
		$m.__track_lines__[196] = 'game3.py, line 196:\n    posY += 1';
		$m.__track_lines__[198] = 'game3.py, line 198:\n    def canMove(goal):';
		$m.__track_lines__[199] = 'game3.py, line 199:\n    if goal[0] < 0 or goal[1] < 0 or goal[1] >=10:';
		$m.__track_lines__[200] = 'game3.py, line 200:\n    print "cant move because off screen y: ",goal[0]," x: ",goal[1]';
		$m.__track_lines__[201] = 'game3.py, line 201:\n    return False';
		$m.__track_lines__[202] = 'game3.py, line 202:\n    return not(canEat(goal))';
		$m.__track_lines__[204] = 'game3.py, line 204:\n    def move(direction):';
		$m.__track_lines__[205] = 'game3.py, line 205:\n    global posX, posY,boardArr';
		$m.__track_lines__[206] = 'game3.py, line 206:\n    goal = (0,0)';
		$m.__track_lines__[207] = 'game3.py, line 207:\n    if direction == "right":';
		$m.__track_lines__[208] = 'game3.py, line 208:\n    goal = (posY,posX+1)';
		$m.__track_lines__[210] = 'game3.py, line 210:\n    goal = (posY,posX-1)';
		$m.__track_lines__[212] = 'game3.py, line 212:\n    goal = (posY+1,posX)';
		$m.__track_lines__[213] = 'game3.py, line 213:\n    if canMove(goal):';
		$m.__track_lines__[214] = 'game3.py, line 214:\n    if direction == "right":';
		$m.__track_lines__[215] = 'game3.py, line 215:\n    posX += 1';
		$m.__track_lines__[217] = 'game3.py, line 217:\n    posX = posX -1';
		$m.__track_lines__[219] = 'game3.py, line 219:\n    posY += 1';
		$m.__track_lines__[221] = 'game3.py, line 221:\n    if direction == "right":';
		$m.__track_lines__[222] = 'game3.py, line 222:\n    posX += 1';
		$m.__track_lines__[224] = 'game3.py, line 224:\n    posX -= 1';
		$m.__track_lines__[225] = 'game3.py, line 225:\n    posY -= 1';
		$m.__track_lines__[227] = 'game3.py, line 227:\n    if direction == "right":';
		$m.__track_lines__[228] = 'game3.py, line 228:\n    posX += 1';
		$m.__track_lines__[230] = 'game3.py, line 230:\n    posX -= 1';
		$m.__track_lines__[231] = 'game3.py, line 231:\n    posY += 1';
		$m.__track_lines__[233] = 'game3.py, line 233:\n    collapse()';
		$m.__track_lines__[234] = 'game3.py, line 234:\n    renderScreen()';
		$m.__track_lines__[236] = 'game3.py, line 236:\n    def renderScoreAndStomach():';
		$m.__track_lines__[237] = 'game3.py, line 237:\n    if pygame.font:';
		$m.__track_lines__[238] = 'game3.py, line 238:\n    font = pygame.font.Font(None, 36)';
		$m.__track_lines__[239] = 'game3.py, line 239:\n    scoreText = "Score: %d    Belly Space: %d" %(score,stomachSpace)';
		$m.__track_lines__[240] = 'game3.py, line 240:\n    text = font.render(scoreText, 1, (0, 0, 0))';
		$m.__track_lines__[241] = 'game3.py, line 241:\n    textpos = text.get_rect(centerx=DISPLAYSURF.get_width()/2)';
		$m.__track_lines__[242] = 'game3.py, line 242:\n    DISPLAYSURF.blit(text, textpos)';
		$m.__track_lines__[244] = 'game3.py, line 244:\n    print "fonts disabled"';
		$m.__track_lines__[245] = 'game3.py, line 245:\n    def renderCharacter():';
		$m.__track_lines__[246] = 'game3.py, line 246:\n    global posX,posY,boardArr, DISPLAYSURF,direction';
		$m.__track_lines__[249] = 'game3.py, line 249:\n    vertices = [(posX*50,300),(posX*50+50,300),(posX*50+25,300+50)]';
		$m.__track_lines__[250] = 'game3.py, line 250:\n    if direction == "right":';
		$m.__track_lines__[251] = 'game3.py, line 251:\n    vertices = [(posX*50,300),(posX*50+50,300+25),(posX*50,300+50)]';
		$m.__track_lines__[253] = 'game3.py, line 253:\n    vertices = [(posX*50+50,300),(posX*50+50,300+50),(posX*50,300+25)]';
		$m.__track_lines__[255] = 'game3.py, line 255:\n    vertices = [(posX*50,300),(posX*50+50,300),(posX*50+25,300+50)]';
		$m.__track_lines__[258] = 'game3.py, line 258:\n    pygame.draw.polygon(DISPLAYSURF,(190,78,89), vertices, 0)';
		$m.__track_lines__[259] = 'game3.py, line 259:\n    print posY, ", ", posX';
		$m.__track_lines__[262] = 'game3.py, line 262:\n    def renderScreen():';
		$m.__track_lines__[263] = 'game3.py, line 263:\n    global posX,posY,boardArr, boardArrHeight, DISPLAYSURF';
		$m.__track_lines__[265] = 'game3.py, line 265:\n    PINK = (255,0,128)';
		$m.__track_lines__[266] = 'game3.py, line 266:\n    PURPLE = (147,112,219)';
		$m.__track_lines__[267] = 'game3.py, line 267:\n    BLUE = (135,216,250)';
		$m.__track_lines__[268] = 'game3.py, line 268:\n    WHITE = (255,255,255)';
		$m.__track_lines__[269] = 'game3.py, line 269:\n    color = WHITE';
		$m.__track_lines__[270] = 'game3.py, line 270:\n    DISPLAYSURF.fill((255,255,255))';
		$m.__track_lines__[271] = 'game3.py, line 271:\n    for i in xrange(0,boardArrHeight):';
		$m.__track_lines__[272] = 'game3.py, line 272:\n    for j in xrange(0,10):';
		$m.__track_lines__[273] = 'game3.py, line 273:\n    tileType = boardArr[i][j]';
		$m.__track_lines__[275] = 'game3.py, line 275:\n    if tileType == 1 or tileType == "1":';
		$m.__track_lines__[276] = 'game3.py, line 276:\n    print "PINK"';
		$m.__track_lines__[277] = 'game3.py, line 277:\n    color = PINK';
		$m.__track_lines__[279] = 'game3.py, line 279:\n    print "PURPLE"';
		$m.__track_lines__[280] = 'game3.py, line 280:\n    color = PURPLE';
		$m.__track_lines__[282] = 'game3.py, line 282:\n    print "BLUE"';
		$m.__track_lines__[283] = 'game3.py, line 283:\n    color = BLUE';
		$m.__track_lines__[285] = 'game3.py, line 285:\n    color = (0,0,0)';
		$m.__track_lines__[287] = 'game3.py, line 287:\n    color = WHITE';
		$m.__track_lines__[288] = 'game3.py, line 288:\n    startPos = 300-posY*50';
		$m.__track_lines__[289] = 'game3.py, line 289:\n    if startPos+i*50 > 1000:';
		$m.__track_lines__[290] = 'game3.py, line 290:\n    break';
		$m.__track_lines__[291] = 'game3.py, line 291:\n    pygame.draw.rect(DISPLAYSURF,color,pygame.Rect(j*50,startPos+i*50,50,50),0)';
		$m.__track_lines__[292] = 'game3.py, line 292:\n    pygame.draw.rect(DISPLAYSURF,WHITE,pygame.Rect(j*50,startPos+i*50,50,50),5)';
		$m.__track_lines__[294] = 'game3.py, line 294:\n    renderScoreAndStomach()';
		$m.__track_lines__[295] = 'game3.py, line 295:\n    renderCharacter()';
		$m.__track_lines__[296] = 'game3.py, line 296:\n    pygame.display.flip()';
		$m.__track_lines__[301] = 'game3.py, line 301:\n    def die():';
		$m.__track_lines__[302] = 'game3.py, line 302:\n    print "collapsed on character" #what happens when you die';
		$m.__track_lines__[305] = "game3.py, line 305:\n    if __name__ == '__main__':";
		$m.__track_lines__[306] = 'game3.py, line 306:\n    main()';
		var $mul4,$mul3,$mul2,$mul1;
		var $constant_int_0 = new $p['int'](0);
		var $constant_int_1 = new $p['int'](1);
		var $constant_int_2 = new $p['int'](2);
		var $constant_int_3 = new $p['int'](3);
		var $constant_int_4 = new $p['int'](4);
		var $constant_int_5 = new $p['int'](5);
		var $constant_int_135 = new $p['int'](135);
		var $constant_int_10 = new $p['int'](10);
		var $constant_int_18 = new $p['int'](18);
		var $constant_int_147 = new $p['int'](147);
		var $constant_int_25 = new $p['int'](25);
		var $constant_int_36 = new $p['int'](36);
		var $constant_int_300 = new $p['int'](300);
		var $constant_int_50 = new $p['int'](50);
		var $constant_int_128 = new $p['int'](128);
		var $constant_int_700 = new $p['int'](700);
		var $constant_int_190 = new $p['int'](190);
		var $constant_int_200 = new $p['int'](200);
		var $constant_int_78 = new $p['int'](78);
		var $constant_int_216 = new $p['int'](216);
		var $constant_int_89 = new $p['int'](89);
		var $constant_int_219 = new $p['int'](219);
		var $constant_int_100 = new $p['int'](100);
		var $constant_int_1000 = new $p['int'](1000);
		var $constant_int_112 = new $p['int'](112);
		var $constant_int_500 = new $p['int'](500);
		var $constant_int_250 = new $p['int'](250);
		var $constant_int_255 = new $p['int'](255);
		$pyjs['track']['module']='game3';
		$pyjs['track']['lineno']=1;
		$pyjs['track']['lineno']=1;
		$pyjs['track']={'module':$pyjs['track']['module'],'lineno':$pyjs['track']['lineno']};$pyjs['trackstack']['push']($pyjs['track']);
		$m['random'] = $p['___import___']('random', null);
		$pyjs['trackstack']['pop']();$pyjs['track']=$pyjs['trackstack']['pop']();$pyjs['trackstack']['push']($pyjs['track']);
		$pyjs['track']={'module':$pyjs['track']['module'],'lineno':$pyjs['track']['lineno']};$pyjs['trackstack']['push']($pyjs['track']);
		$m['time'] = $p['___import___']('time', null);
		$pyjs['trackstack']['pop']();$pyjs['track']=$pyjs['trackstack']['pop']();$pyjs['trackstack']['push']($pyjs['track']);
		$pyjs['track']={'module':$pyjs['track']['module'],'lineno':$pyjs['track']['lineno']};$pyjs['trackstack']['push']($pyjs['track']);
		$m['sys'] = $p['___import___']('sys', null);
		$pyjs['trackstack']['pop']();$pyjs['track']=$pyjs['trackstack']['pop']();$pyjs['trackstack']['push']($pyjs['track']);
		$pyjs['track']['lineno']=3;
		$pyjs['track']={'module':$pyjs['track']['module'],'lineno':$pyjs['track']['lineno']};$pyjs['trackstack']['push']($pyjs['track']);
		$p['__import_all__']('pygame.locals', null, $m, null, false);
		$pyjs['trackstack']['pop']();$pyjs['track']=$pyjs['trackstack']['pop']();$pyjs['trackstack']['push']($pyjs['track']);
		$pyjs['track']['lineno']=4;
		$pyjs['track']={'module':$pyjs['track']['module'],'lineno':$pyjs['track']['lineno']};$pyjs['trackstack']['push']($pyjs['track']);
		$m['pygame'] = $p['___import___']('pyjsdl', null, null, false);
		$pyjs['trackstack']['pop']();$pyjs['track']=$pyjs['trackstack']['pop']();$pyjs['trackstack']['push']($pyjs['track']);
		$pyjs['track']['lineno']=7;
		$m['WINDOWWIDTH'] = $constant_int_500;
		$pyjs['track']['lineno']=8;
		$m['WINDOWHEIGHT'] = $constant_int_700;
		$pyjs['track']['lineno']=9;
		$m['boardArrHeight'] = $constant_int_200;
		$pyjs['track']['lineno']=10;
		$m['boardArr'] = $p['list']([]);
		$pyjs['track']['lineno']=11;
		$m['posX'] = $constant_int_5;
		$pyjs['track']['lineno']=12;
		$m['posY'] = $constant_int_0;
		$pyjs['track']['lineno']=13;
		$m['direction'] = 'down';
		$pyjs['track']['lineno']=14;
		$m['score'] = $constant_int_0;
		$pyjs['track']['lineno']=15;
		$m['stomachSpace'] = $constant_int_100;
		$pyjs['track']['lineno']=16;
		$m['numLives'] = $constant_int_0;
		$pyjs['track']['lineno']=17;
		$m['collapseGroupHolder'] = (typeof ($mul3=$p['list']([(typeof ($mul1=$p['list']([$constant_int_0]))==typeof ($mul2=$constant_int_10) && typeof $mul1=='number'?
			$mul1*$mul2:
			$p['op_mul']($mul1,$mul2))]))==typeof ($mul4=$m['boardArrHeight']) && typeof $mul3=='number'?
			$mul3*$mul4:
			$p['op_mul']($mul3,$mul4));
		$pyjs['track']['lineno']=19;
		$m['initBoardArr'] = function() {
			if ($pyjs['options']['arg_count'] && arguments['length'] != 0) $pyjs__exception_func_param(arguments['callee']['__name__'], 0, 0, arguments['length']);
			var $iter1_nextval,$iter1_type,f,innerListInts,inner_list,$iter1_iter,$iter1_array,$pyjs__trackstack_size_1,line,$iter1_idx;
			$pyjs['track']={'module':'game3','lineno':19};$pyjs['trackstack']['push']($pyjs['track']);
			$pyjs['track']['module']='game3';
			$pyjs['track']['lineno']=19;
			$pyjs['track']['lineno']=20;
			$pyjs['track']['lineno']=21;
			$p['__with']($p['open']('boardArr.txt'), function($withval1){
				f = (typeof $withval1 == "undefined"?$m['$withval1']:$withval1);
				$pyjs['track']['lineno']=22;
				$pyjs__trackstack_size_1=$pyjs['trackstack']['length'];
				$iter1_iter = f;
				$iter1_nextval=$p['__iter_prepare']($iter1_iter,false);
				while (typeof($p['__wrapped_next']($iter1_nextval)['$nextval']) != 'undefined') {
					line = $iter1_nextval['$nextval'];
					$pyjs['track']['lineno']=24;
					inner_list = line['rstrip']('\n')['$$split'](' ');
					$pyjs['track']['lineno']=25;
					innerListInts = function(){
						var numeric_string,$iter2_nextval,$iter2_type,$iter2_iter,$collcomp1,$iter2_idx,$pyjs__trackstack_size_2,$iter2_array;
	$collcomp1 = $p['list']();
					$pyjs__trackstack_size_2=$pyjs['trackstack']['length'];
					$iter2_iter = inner_list;
					$iter2_nextval=$p['__iter_prepare']($iter2_iter,false);
					while (typeof($p['__wrapped_next']($iter2_nextval)['$nextval']) != 'undefined') {
						numeric_string = $iter2_nextval['$nextval'];
						$collcomp1['append']($p['int'](numeric_string));
					}
					if ($pyjs['trackstack']['length'] > $pyjs__trackstack_size_2) {
						$pyjs['trackstack'] = $pyjs['trackstack']['slice'](0,$pyjs__trackstack_size_2);
						$pyjs['track'] = $pyjs['trackstack']['slice'](-1)[0];
					}
					$pyjs['track']['module']='game3';

	return $collcomp1;}();
					$pyjs['track']['lineno']=28;
					$m['boardArr']['append'](innerListInts);
				}
				if ($pyjs['trackstack']['length'] > $pyjs__trackstack_size_1) {
					$pyjs['trackstack'] = $pyjs['trackstack']['slice'](0,$pyjs__trackstack_size_1);
					$pyjs['track'] = $pyjs['trackstack']['slice'](-1)[0];
				}
				$pyjs['track']['module']='game3';
				$pyjs['track']['lineno']=29;
				$p['printFunc']([$m['boardArr']], 1);
				$pyjs['track']['lineno']=30;
				$p['printFunc'](['** ', $m['boardArr']['__getitem__']($constant_int_0)], 1);
				$pyjs['track']['lineno']=31;
				$p['printFunc'](['**** ', $m['boardArr']['__getitem__']($constant_int_0)['__getitem__']($constant_int_0)], 1);
			});
			$pyjs['trackstack']['pop']();$pyjs['track']=$pyjs['trackstack']['pop']();$pyjs['trackstack']['push']($pyjs['track']);
			return null;
		};
		$m['initBoardArr']['__name__'] = 'initBoardArr';

		$m['initBoardArr']['__bind_type__'] = 0;
		$m['initBoardArr']['__args__'] = [null,null];
		$pyjs['track']['lineno']=33;
		$m['main'] = function() {
			if ($pyjs['options']['arg_count'] && arguments['length'] != 0) $pyjs__exception_func_param(arguments['callee']['__name__'], 0, 0, arguments['length']);

			$pyjs['track']={'module':'game3','lineno':33};$pyjs['trackstack']['push']($pyjs['track']);
			$pyjs['track']['module']='game3';
			$pyjs['track']['lineno']=33;
			$pyjs['track']['lineno']=34;
			$pyjs['track']['lineno']=35;
			$m['pygame']['init']();
			$pyjs['track']['lineno']=36;
			$p['printFunc'](['in main'], 1);
			$pyjs['track']['lineno']=37;
			$m['FPSCLOCK'] = $m['pygame']['time']['Clock']();
			$pyjs['track']['lineno']=38;
			$m['DISPLAYSURF'] = $m['pygame']['display']['set_mode']($p['tuple']([$m['WINDOWWIDTH'], $m['WINDOWHEIGHT']]));
			$pyjs['track']['lineno']=39;
			$m['DISPLAYSURF']['fill']($p['tuple']([$constant_int_255, $constant_int_255, $constant_int_255]));
			$pyjs['track']['lineno']=40;
			$m['BASICFONT'] = $m['pygame']['font']['Font']('freesansbold.ttf', $constant_int_18);
			$pyjs['track']['lineno']=41;
			$m['BIGFONT'] = $m['pygame']['font']['Font']('freesansbold.ttf', $constant_int_100);
			$pyjs['track']['lineno']=42;
			$m['pygame']['display']['set_caption']('Cotton Candy');
			$pyjs['track']['lineno']=43;
			$m['initBoardArr']();
			$pyjs['track']['lineno']=44;
			(typeof renderScreen == "undefined"?$m['renderScreen']:renderScreen)();
			$pyjs['track']['lineno']=45;
			while ($p['bool'](true)) {
				$pyjs['track']['lineno']=46;
				(typeof runGame == "undefined"?$m['runGame']:runGame)();
				$pyjs['track']['lineno']=47;
				(typeof showTextScreen == "undefined"?$m['showTextScreen']:showTextScreen)('Game Over');
			}
			$pyjs['trackstack']['pop']();$pyjs['track']=$pyjs['trackstack']['pop']();$pyjs['trackstack']['push']($pyjs['track']);
			return null;
		};
		$m['main']['__name__'] = 'main';

		$m['main']['__bind_type__'] = 0;
		$m['main']['__args__'] = [null,null];
		$pyjs['track']['lineno']=48;
		$m['runGame'] = function() {
			if ($pyjs['options']['arg_count'] && arguments['length'] != 0) $pyjs__exception_func_param(arguments['callee']['__name__'], 0, 0, arguments['length']);
			var $or5,$or4,$iter3_idx,$or1,$or3,$iter3_array,$or2,$iter3_nextval,$or7,$or8,$or6,$iter3_iter,$iter3_type,$pyjs__trackstack_size_1,event;
			$pyjs['track']={'module':'game3','lineno':48};$pyjs['trackstack']['push']($pyjs['track']);
			$pyjs['track']['module']='game3';
			$pyjs['track']['lineno']=48;
			$pyjs['track']['lineno']=49;
			$pyjs['track']['lineno']=50;
			while ($p['bool'](true)) {
				$pyjs['track']['lineno']=51;
				(typeof collapse == "undefined"?$m['collapse']:collapse)();
				$pyjs['track']['lineno']=52;
				$pyjs__trackstack_size_1=$pyjs['trackstack']['length'];
				$iter3_iter = $m['pygame']['event']['get']();
				$iter3_nextval=$p['__iter_prepare']($iter3_iter,false);
				while (typeof($p['__wrapped_next']($iter3_nextval)['$nextval']) != 'undefined') {
					event = $iter3_nextval['$nextval'];
					$pyjs['track']['lineno']=53;
					if ($p['bool']($p['op_eq']($p['getattr'](event, 'type'), (typeof KEYDOWN == "undefined"?$m['KEYDOWN']:KEYDOWN)))) {
						$pyjs['track']['lineno']=54;
						if ($p['bool'](($p['bool']($or1=$p['op_eq']($p['getattr'](event, 'key'), (typeof K_LEFT == "undefined"?$m['K_LEFT']:K_LEFT)))?$or1:$p['op_eq']($p['getattr'](event, 'key'), (typeof K_a == "undefined"?$m['K_a']:K_a))))) {
							$pyjs['track']['lineno']=55;
							$p['printFunc'](['left pressed'], 1);
							$pyjs['track']['lineno']=56;
							if ($p['bool']($p['op_eq']($m['direction'], 'left'))) {
								$pyjs['track']['lineno']=57;
								(typeof move == "undefined"?$m['move']:move)($m['direction']);
							}
							$pyjs['track']['lineno']=58;
							$m['direction'] = 'left';
						}
						else if ($p['bool'](($p['bool']($or3=$p['op_eq']($p['getattr'](event, 'key'), (typeof K_RIGHT == "undefined"?$m['K_RIGHT']:K_RIGHT)))?$or3:$p['op_eq']($p['getattr'](event, 'key'), (typeof K_d == "undefined"?$m['K_d']:K_d))))) {
							$pyjs['track']['lineno']=60;
							$p['printFunc'](['right pressed'], 1);
							$pyjs['track']['lineno']=61;
							if ($p['bool']($p['op_eq']($m['direction'], 'right'))) {
								$pyjs['track']['lineno']=62;
								(typeof move == "undefined"?$m['move']:move)($m['direction']);
							}
							$pyjs['track']['lineno']=63;
							$m['direction'] = 'right';
						}
						else if ($p['bool'](($p['bool']($or5=$p['op_eq']($p['getattr'](event, 'key'), (typeof K_UP == "undefined"?$m['K_UP']:K_UP)))?$or5:$p['op_eq']($p['getattr'](event, 'key'), (typeof K_w == "undefined"?$m['K_w']:K_w))))) {
							$pyjs['track']['lineno']=65;
							$p['printFunc'](['up pressed'], 1);
							$pyjs['track']['lineno']=66;
							$p['op_eq']($m['direction'], 'up');
						}
						else if ($p['bool'](($p['bool']($or7=$p['op_eq']($p['getattr'](event, 'key'), (typeof K_DOWN == "undefined"?$m['K_DOWN']:K_DOWN)))?$or7:$p['op_eq']($p['getattr'](event, 'key'), (typeof K_s == "undefined"?$m['K_s']:K_s))))) {
							$pyjs['track']['lineno']=68;
							$p['printFunc'](['down pressed'], 1);
							$pyjs['track']['lineno']=69;
							if ($p['bool']($p['op_eq']($m['direction'], 'down'))) {
								$pyjs['track']['lineno']=70;
								(typeof move == "undefined"?$m['move']:move)($m['direction']);
							}
							$pyjs['track']['lineno']=71;
							$m['direction'] = 'down';
						}
						else if ($p['bool']($p['op_eq']($p['getattr'](event, 'key'), (typeof K_SPACE == "undefined"?$m['K_SPACE']:K_SPACE)))) {
							$pyjs['track']['lineno']=73;
							$p['printFunc'](['eating direction is ', $m['direction']], 1);
							$pyjs['track']['lineno']=74;
							(typeof eat == "undefined"?$m['eat']:eat)($m['direction']);
						}
						$pyjs['track']['lineno']=75;
						(typeof renderScreen == "undefined"?$m['renderScreen']:renderScreen)();
					}
				}
				if ($pyjs['trackstack']['length'] > $pyjs__trackstack_size_1) {
					$pyjs['trackstack'] = $pyjs['trackstack']['slice'](0,$pyjs__trackstack_size_1);
					$pyjs['track'] = $pyjs['trackstack']['slice'](-1)[0];
				}
				$pyjs['track']['module']='game3';
			}
			$pyjs['trackstack']['pop']();$pyjs['track']=$pyjs['trackstack']['pop']();$pyjs['trackstack']['push']($pyjs['track']);
			return null;
		};
		$m['runGame']['__name__'] = 'runGame';

		$m['runGame']['__bind_type__'] = 0;
		$m['runGame']['__args__'] = [null,null];
		$pyjs['track']['lineno']=76;
		$m['canEat'] = function(goal) {
			if ($pyjs['options']['arg_count'] && arguments['length'] != 1) $pyjs__exception_func_param(arguments['callee']['__name__'], 1, 1, arguments['length']);
			var $or9,$or11,$or10,col,row;
			$pyjs['track']={'module':'game3','lineno':76};$pyjs['trackstack']['push']($pyjs['track']);
			$pyjs['track']['module']='game3';
			$pyjs['track']['lineno']=76;
			$pyjs['track']['lineno']=77;
			$pyjs['track']['lineno']=78;
			if ($p['bool'](($p['bool']($or9=($p['cmp'](goal['__getitem__']($constant_int_0), $constant_int_0) == -1))?$or9:($p['bool']($or10=($p['cmp'](goal['__getitem__']($constant_int_1), $constant_int_0) == -1))?$or10:((($p['cmp'](goal['__getitem__']($constant_int_1), $constant_int_10))|1) == 1))))) {
				$pyjs['track']['lineno']=79;
				$p['printFunc'](['cant eat because off screen'], 1);
				$pyjs['track']['lineno']=80;
				$pyjs['track']['lineno']=80;
				var $pyjs__ret = false;
				$pyjs['trackstack']['pop']();$pyjs['track']=$pyjs['trackstack']['pop']();$pyjs['trackstack']['push']($pyjs['track']);
				return $pyjs__ret;
			}
			$pyjs['track']['lineno']=81;
			row = goal['__getitem__']($constant_int_0);
			$pyjs['track']['lineno']=82;
			col = goal['__getitem__']($constant_int_1);
			$pyjs['track']['lineno']=83;
			if ($p['bool']($p['op_eq']($m['boardArr']['__getitem__'](row)['__getitem__'](col), $constant_int_0))) {
				$pyjs['track']['lineno']=84;
				$p['printFunc'](['cant eat because empty there: ', $m['direction']], 1);
				$pyjs['track']['lineno']=85;
				$pyjs['track']['lineno']=85;
				var $pyjs__ret = false;
				$pyjs['trackstack']['pop']();$pyjs['track']=$pyjs['trackstack']['pop']();$pyjs['trackstack']['push']($pyjs['track']);
				return $pyjs__ret;
			}
			else {
				$pyjs['track']['lineno']=87;
				$pyjs['track']['lineno']=87;
				var $pyjs__ret = true;
				$pyjs['trackstack']['pop']();$pyjs['track']=$pyjs['trackstack']['pop']();$pyjs['trackstack']['push']($pyjs['track']);
				return $pyjs__ret;
			}
			$pyjs['trackstack']['pop']();$pyjs['track']=$pyjs['trackstack']['pop']();$pyjs['trackstack']['push']($pyjs['track']);
			return null;
		};
		$m['canEat']['__name__'] = 'canEat';

		$m['canEat']['__bind_type__'] = 0;
		$m['canEat']['__args__'] = [null,null,['goal']];
		$pyjs['track']['lineno']=90;
		$m['eat'] = function(direction) {
			if ($pyjs['options']['arg_count'] && arguments['length'] != 1) $pyjs__exception_func_param(arguments['callee']['__name__'], 1, 1, arguments['length']);
			var goal,$add3,row,$add2,$sub2,$sub4,$add4,$sub3,$sub1,$add1,col;
			$pyjs['track']={'module':'game3','lineno':90};$pyjs['trackstack']['push']($pyjs['track']);
			$pyjs['track']['module']='game3';
			$pyjs['track']['lineno']=90;
			$pyjs['track']['lineno']=91;
			$pyjs['track']['lineno']=92;
			goal = $p['tuple']([$constant_int_0, $constant_int_0]);
			$pyjs['track']['lineno']=93;
			if ($p['bool']($p['op_eq'](direction, 'right'))) {
				$pyjs['track']['lineno']=94;
				goal = $p['tuple']([$m['posY'], $p['__op_add']($add1=$m['posX'],$add2=$constant_int_1)]);
			}
			else if ($p['bool']($p['op_eq'](direction, 'left'))) {
				$pyjs['track']['lineno']=96;
				goal = $p['tuple']([$m['posY'], $p['__op_sub']($sub1=$m['posX'],$sub2=$constant_int_1)]);
			}
			else if ($p['bool']($p['op_eq'](direction, 'down'))) {
				$pyjs['track']['lineno']=98;
				goal = $p['tuple']([$p['__op_add']($add3=$m['posY'],$add4=$constant_int_1), $m['posX']]);
			}
			$pyjs['track']['lineno']=101;
			if ($p['bool']($m['canEat'](goal))) {
				$pyjs['track']['lineno']=102;
				$m['stomachSpace'] = $p['__op_sub']($sub3=$m['stomachSpace'],$sub4=$constant_int_1);
				$pyjs['track']['lineno']=103;
				row = goal['__getitem__']($constant_int_0);
				$pyjs['track']['lineno']=104;
				col = goal['__getitem__']($constant_int_1);
				$pyjs['track']['lineno']=105;
				(typeof getEatGroup == "undefined"?$m['getEatGroup']:getEatGroup)(goal, $m['boardArr']['__getitem__'](row)['__getitem__'](col));
			}
			$pyjs['track']['lineno']=108;
			(typeof collapse == "undefined"?$m['collapse']:collapse)();
			$pyjs['track']['lineno']=109;
			(typeof renderScreen == "undefined"?$m['renderScreen']:renderScreen)();
			$pyjs['trackstack']['pop']();$pyjs['track']=$pyjs['trackstack']['pop']();$pyjs['trackstack']['push']($pyjs['track']);
			return null;
		};
		$m['eat']['__name__'] = 'eat';

		$m['eat']['__bind_type__'] = 0;
		$m['eat']['__args__'] = [null,null,['direction']];
		$pyjs['track']['lineno']=111;
		$m['getEatGroup'] = function(goal, tileType) {
			if ($pyjs['options']['arg_count'] && arguments['length'] != 2) $pyjs__exception_func_param(arguments['callee']['__name__'], 2, 2, arguments['length']);
			var $sub16,row,$sub9,$sub8,$sub12,$sub7,$sub6,$sub5,$sub10,$sub13,$and1,$and2,$and3,$and4,$and5,$and6,$sub14,$add14,$add15,$add16,$add10,$add11,$add12,$add13,$sub15,$add6,$add7,$add5,$sub11,$add8,$add9,col;
			$pyjs['track']={'module':'game3','lineno':111};$pyjs['trackstack']['push']($pyjs['track']);
			$pyjs['track']['module']='game3';
			$pyjs['track']['lineno']=111;
			$pyjs['track']['lineno']=112;
			$pyjs['track']['lineno']=113;
			row = goal['__getitem__']($constant_int_0);
			$pyjs['track']['lineno']=114;
			col = goal['__getitem__']($constant_int_1);
			$pyjs['track']['lineno']=115;
			$p['printFunc'](['tile type is: ', $m['boardArr']['__getitem__'](row)['__getitem__'](col)], 1);
			$pyjs['track']['lineno']=117;
			$m['boardArr']['__getitem__'](row)['__setitem__'](col, $constant_int_0);
			$pyjs['track']['lineno']=118;
			$m['score'] = $p['__op_add']($add5=$m['score'],$add6=$constant_int_1);
			$pyjs['track']['lineno']=119;
			if ($p['bool'](($p['bool']($and1=($p['cmp']($p['__op_add']($add7=col,$add8=$constant_int_1), $constant_int_10) == -1))?$p['op_eq']($m['boardArr']['__getitem__'](row)['__getitem__']($p['__op_add']($add9=col,$add10=$constant_int_1)), tileType):$and1))) {
				$pyjs['track']['lineno']=120;
				$m['getEatGroup']($p['tuple']([row, $p['__op_add']($add11=col,$add12=$constant_int_1)]), tileType);
			}
			$pyjs['track']['lineno']=121;
			if ($p['bool'](($p['bool']($and3=((($p['cmp']($p['__op_sub']($sub5=col,$sub6=$constant_int_1), $constant_int_0))|1) == 1))?$p['op_eq']($m['boardArr']['__getitem__'](row)['__getitem__']($p['__op_sub']($sub7=col,$sub8=$constant_int_1)), tileType):$and3))) {
				$pyjs['track']['lineno']=122;
				$m['getEatGroup']($p['tuple']([row, $p['__op_sub']($sub9=col,$sub10=$constant_int_1)]), tileType);
			}
			$pyjs['track']['lineno']=123;
			if ($p['bool']($p['op_eq']($m['boardArr']['__getitem__']($p['__op_add']($add13=row,$add14=$constant_int_1))['__getitem__'](col), tileType))) {
				$pyjs['track']['lineno']=124;
				$m['getEatGroup']($p['tuple']([$p['__op_add']($add15=row,$add16=$constant_int_1), col]), tileType);
			}
			$pyjs['track']['lineno']=125;
			if ($p['bool'](($p['bool']($and5=((($p['cmp']($p['__op_sub']($sub11=row,$sub12=$constant_int_1), $constant_int_0))|1) == 1))?$p['op_eq']($m['boardArr']['__getitem__']($p['__op_sub']($sub13=row,$sub14=$constant_int_1))['__getitem__'](col), tileType):$and5))) {
				$pyjs['track']['lineno']=126;
				$m['getEatGroup']($p['tuple']([$p['__op_sub']($sub15=row,$sub16=$constant_int_1), col]), tileType);
			}
			$pyjs['trackstack']['pop']();$pyjs['track']=$pyjs['trackstack']['pop']();$pyjs['trackstack']['push']($pyjs['track']);
			return null;
		};
		$m['getEatGroup']['__name__'] = 'getEatGroup';

		$m['getEatGroup']['__bind_type__'] = 0;
		$m['getEatGroup']['__args__'] = [null,null,['goal'],['tileType']];
		$pyjs['track']['lineno']=129;
		$m['collapsable'] = function(row, col, num) {
			if ($pyjs['options']['arg_count'] && arguments['length'] != 3) $pyjs__exception_func_param(arguments['callee']['__name__'], 3, 3, arguments['length']);
			var $sub22,$sub20,$sub21,$sub19,$add21,$add20,$add23,$add22,$add25,$add24,$add26,$and8,$and9,sameType,$sub18,$sub17,$and7,$and10,$add17,$add18,$add19,$or15,$or14,$or13,$or12;
			$pyjs['track']={'module':'game3','lineno':129};$pyjs['trackstack']['push']($pyjs['track']);
			$pyjs['track']['module']='game3';
			$pyjs['track']['lineno']=129;
			$pyjs['track']['lineno']=130;
			$pyjs['track']['lineno']=131;
			sameType = $m['boardArr']['__getitem__'](row)['__getitem__'](col);
			$pyjs['track']['lineno']=132;
			if ($p['bool']($p['op_eq'](sameType, $constant_int_0))) {
				$pyjs['track']['lineno']=133;
				$pyjs['track']['lineno']=133;
				var $pyjs__ret = false;
				$pyjs['trackstack']['pop']();$pyjs['track']=$pyjs['trackstack']['pop']();$pyjs['trackstack']['push']($pyjs['track']);
				return $pyjs__ret;
			}
			$pyjs['track']['lineno']=134;
			if ($p['bool'](($p['bool']($and7=($p['cmp']($p['__op_add']($add17=col,$add18=$constant_int_1), $constant_int_10) == -1))?($p['bool']($or12=$p['op_eq']($m['boardArr']['__getitem__'](row)['__getitem__']($p['__op_add']($add19=col,$add20=$constant_int_1)), sameType))?$or12:($p['cmp'](num, $constant_int_0) == 1)):$and7))) {
				$pyjs['track']['lineno']=135;
				if ($p['bool'](!$p['bool']($m['collapsable'](row, $p['__op_add']($add21=col,$add22=$constant_int_1), $p['__op_add']($add23=num,$add24=$constant_int_1))))) {
					$pyjs['track']['lineno']=136;
					$pyjs['track']['lineno']=136;
					var $pyjs__ret = false;
					$pyjs['trackstack']['pop']();$pyjs['track']=$pyjs['trackstack']['pop']();$pyjs['trackstack']['push']($pyjs['track']);
					return $pyjs__ret;
				}
			}
			$pyjs['track']['lineno']=137;
			if ($p['bool'](($p['bool']($and9=((($p['cmp']($p['__op_sub']($sub17=row,$sub18=$constant_int_1), $constant_int_0))|1) == 1))?($p['bool']($or14=$p['op_eq']($m['boardArr']['__getitem__']($p['__op_sub']($sub19=row,$sub20=$constant_int_1))['__getitem__'](col), sameType))?$or14:($p['cmp'](num, $constant_int_0) == 1)):$and9))) {
				$pyjs['track']['lineno']=138;
				if ($p['bool'](!$p['bool']($m['collapsable']($p['__op_sub']($sub21=row,$sub22=$constant_int_1), col, $p['__op_add']($add25=num,$add26=$constant_int_1))))) {
					$pyjs['track']['lineno']=139;
					$pyjs['track']['lineno']=139;
					var $pyjs__ret = false;
					$pyjs['trackstack']['pop']();$pyjs['track']=$pyjs['trackstack']['pop']();$pyjs['trackstack']['push']($pyjs['track']);
					return $pyjs__ret;
				}
			}
			$pyjs['track']['lineno']=140;
			$pyjs['track']['lineno']=140;
			var $pyjs__ret = true;
			$pyjs['trackstack']['pop']();$pyjs['track']=$pyjs['trackstack']['pop']();$pyjs['trackstack']['push']($pyjs['track']);
			return $pyjs__ret;
		};
		$m['collapsable']['__name__'] = 'collapsable';

		$m['collapsable']['__bind_type__'] = 0;
		$m['collapsable']['__args__'] = [null,null,['row'],['col'],['num']];
		$pyjs['track']['lineno']=142;
		$m['getCollapseGroup'] = function(row, col, tileType) {
			if ($pyjs['options']['arg_count'] && arguments['length'] != 3) $pyjs__exception_func_param(arguments['callee']['__name__'], 3, 3, arguments['length']);
			var $sub23,$sub26,$sub27,$sub24,$sub25,$sub28,$sub29,done,$add41,$and22,$and21,$and20,$add29,$add28,group,$add42,$add27,$add40,$sub31,$sub30,$sub33,$sub32,$sub35,$sub34,$sub37,$sub36,$sub38,$and12,$and13,$and11,$and16,$and17,$and14,$and15,$and18,$and19,$add38,$add39,$add32,$add33,$add30,$add31,$add36,$add37,$add34,$add35;
			$pyjs['track']={'module':'game3','lineno':142};$pyjs['trackstack']['push']($pyjs['track']);
			$pyjs['track']['module']='game3';
			$pyjs['track']['lineno']=142;
			$pyjs['track']['lineno']=143;
			$pyjs['track']['lineno']=144;
			group = $p['list']([]);
			$pyjs['track']['lineno']=145;
			done = $constant_int_0;
			$pyjs['track']['lineno']=146;
			if ($p['bool']($p['op_eq']($m['collapseGroupHolder']['__getitem__'](row)['__getitem__'](col), $constant_int_0))) {
				$pyjs['track']['lineno']=147;
				group['append']($p['tuple']([row, col]));
			}
			$pyjs['track']['lineno']=148;
			$m['collapseGroupHolder']['__getitem__'](row)['__setitem__'](col, $constant_int_1);
			$pyjs['track']['lineno']=149;
			if ($p['bool'](($p['bool']($and11=($p['cmp']($p['__op_add']($add27=col,$add28=$constant_int_1), $constant_int_10) == -1))?($p['bool']($and12=$p['op_eq']($m['boardArr']['__getitem__'](row)['__getitem__']($p['__op_add']($add29=col,$add30=$constant_int_1)), tileType))?$p['op_eq']($m['collapseGroupHolder']['__getitem__'](row)['__getitem__']($p['__op_add']($add31=col,$add32=$constant_int_1)), $constant_int_0):$and12):$and11))) {
				$pyjs['track']['lineno']=150;
				group['extend']($m['getCollapseGroup'](row, $p['__op_add']($add33=col,$add34=$constant_int_1), tileType));
			}
			$pyjs['track']['lineno']=151;
			if ($p['bool'](($p['bool']($and14=((($p['cmp']($p['__op_sub']($sub23=col,$sub24=$constant_int_1), $constant_int_0))|1) == 1))?($p['bool']($and15=$p['op_eq']($m['boardArr']['__getitem__'](row)['__getitem__']($p['__op_sub']($sub25=col,$sub26=$constant_int_1)), tileType))?$p['op_eq']($m['collapseGroupHolder']['__getitem__'](row)['__getitem__']($p['__op_sub']($sub27=col,$sub28=$constant_int_1)), $constant_int_0):$and15):$and14))) {
				$pyjs['track']['lineno']=152;
				group['extend']($m['getCollapseGroup'](row, $p['__op_sub']($sub29=col,$sub30=$constant_int_1), tileType));
			}
			$pyjs['track']['lineno']=153;
			if ($p['bool'](($p['bool']($and17=($p['cmp']($p['__op_add']($add35=row,$add36=$constant_int_1), $m['boardArrHeight']) == -1))?($p['bool']($and18=$p['op_eq']($m['boardArr']['__getitem__']($p['__op_add']($add37=row,$add38=$constant_int_1))['__getitem__'](col), tileType))?$p['op_eq']($m['collapseGroupHolder']['__getitem__']($p['__op_add']($add39=row,$add40=$constant_int_1))['__getitem__'](col), $constant_int_0):$and18):$and17))) {
				$pyjs['track']['lineno']=154;
				group['extend']($m['getCollapseGroup']($p['__op_add']($add41=row,$add42=$constant_int_1), col, tileType));
			}
			$pyjs['track']['lineno']=155;
			if ($p['bool'](($p['bool']($and20=((($p['cmp']($p['__op_sub']($sub31=row,$sub32=$constant_int_1), $constant_int_0))|1) == 1))?($p['bool']($and21=$p['op_eq']($m['boardArr']['__getitem__']($p['__op_sub']($sub33=row,$sub34=$constant_int_1))['__getitem__'](col), tileType))?$p['op_eq']($m['collapseGroupHolder']['__getitem__']($p['__op_sub']($sub35=row,$sub36=$constant_int_1))['__getitem__'](col), $constant_int_0):$and21):$and20))) {
				$pyjs['track']['lineno']=156;
				group['extend']($m['getCollapseGroup']($p['__op_sub']($sub37=row,$sub38=$constant_int_1), col, tileType));
			}
			$pyjs['track']['lineno']=159;
			$pyjs['track']['lineno']=159;
			var $pyjs__ret = group;
			$pyjs['trackstack']['pop']();$pyjs['track']=$pyjs['trackstack']['pop']();$pyjs['trackstack']['push']($pyjs['track']);
			return $pyjs__ret;
		};
		$m['getCollapseGroup']['__name__'] = 'getCollapseGroup';

		$m['getCollapseGroup']['__bind_type__'] = 0;
		$m['getCollapseGroup']['__args__'] = [null,null,['row'],['col'],['tileType']];
		$pyjs['track']['lineno']=161;
		$m['canCollapse'] = function(group) {
			if ($pyjs['options']['arg_count'] && arguments['length'] != 1) $pyjs__exception_func_param(arguments['callee']['__name__'], 1, 1, arguments['length']);
			var $add47,$add48,i,$iter4_nextval,$add45,$add44,$add43,$iter4_idx,$and23,can,$iter4_type,$pyjs__trackstack_size_1,$iter4_array,$iter4_iter,$add46,$and25,$and24;
			$pyjs['track']={'module':'game3','lineno':161};$pyjs['trackstack']['push']($pyjs['track']);
			$pyjs['track']['module']='game3';
			$pyjs['track']['lineno']=161;
			$pyjs['track']['lineno']=162;
			$pyjs['track']['lineno']=163;
			can = true;
			$pyjs['track']['lineno']=164;
			$pyjs__trackstack_size_1=$pyjs['trackstack']['length'];
			$iter4_iter = group;
			$iter4_nextval=$p['__iter_prepare']($iter4_iter,false);
			while (typeof($p['__wrapped_next']($iter4_nextval)['$nextval']) != 'undefined') {
				i = $iter4_nextval['$nextval'];
				$pyjs['track']['lineno']=165;
				if ($p['bool'](($p['bool']($and23=!group['__contains__']($p['tuple']([$p['__op_add']($add43=i['__getitem__']($constant_int_0),$add44=$constant_int_1), i['__getitem__']($constant_int_1)])))?($p['bool']($and24=($p['cmp']($p['__op_add']($add45=i['__getitem__']($constant_int_0),$add46=$constant_int_1), $m['boardArrHeight']) == -1))?!$p['op_eq']($m['boardArr']['__getitem__']($p['__op_add']($add47=i['__getitem__']($constant_int_0),$add48=$constant_int_1))['__getitem__'](i['__getitem__']($constant_int_1)), $constant_int_0):$and24):$and23))) {
					$pyjs['track']['lineno']=166;
					can = false;
				}
			}
			if ($pyjs['trackstack']['length'] > $pyjs__trackstack_size_1) {
				$pyjs['trackstack'] = $pyjs['trackstack']['slice'](0,$pyjs__trackstack_size_1);
				$pyjs['track'] = $pyjs['trackstack']['slice'](-1)[0];
			}
			$pyjs['track']['module']='game3';
			$pyjs['track']['lineno']=169;
			$pyjs['track']['lineno']=169;
			var $pyjs__ret = can;
			$pyjs['trackstack']['pop']();$pyjs['track']=$pyjs['trackstack']['pop']();$pyjs['trackstack']['push']($pyjs['track']);
			return $pyjs__ret;
		};
		$m['canCollapse']['__name__'] = 'canCollapse';

		$m['canCollapse']['__bind_type__'] = 0;
		$m['canCollapse']['__args__'] = [null,null,['group']];
		$pyjs['track']['lineno']=171;
		$m['collapseGroup'] = function(group) {
			if ($pyjs['options']['arg_count'] && arguments['length'] != 1) $pyjs__exception_func_param(arguments['callee']['__name__'], 1, 1, arguments['length']);
			var $iter5_nextval,$add50,$iter5_idx,$add49,$add51,i,$iter5_array,$pyjs__trackstack_size_1,$add52,$iter5_iter,$iter5_type;
			$pyjs['track']={'module':'game3','lineno':171};$pyjs['trackstack']['push']($pyjs['track']);
			$pyjs['track']['module']='game3';
			$pyjs['track']['lineno']=171;
			$pyjs['track']['lineno']=172;
			$pyjs['track']['lineno']=173;
			$pyjs__trackstack_size_1=$pyjs['trackstack']['length'];
			$iter5_iter = group;
			$iter5_nextval=$p['__iter_prepare']($iter5_iter,false);
			while (typeof($p['__wrapped_next']($iter5_nextval)['$nextval']) != 'undefined') {
				i = $iter5_nextval['$nextval'];
				$pyjs['track']['lineno']=174;
				if ($p['bool'](($p['cmp']($p['__op_add']($add49=i['__getitem__']($constant_int_0),$add50=$constant_int_1), $m['boardArrHeight']) == -1))) {
					$pyjs['track']['lineno']=175;
					$m['boardArr']['__getitem__']($p['__op_add']($add51=i['__getitem__']($constant_int_0),$add52=$constant_int_1))['__setitem__'](i['__getitem__']($constant_int_1), $m['boardArr']['__getitem__'](i['__getitem__']($constant_int_0))['__getitem__'](i['__getitem__']($constant_int_1)));
					$pyjs['track']['lineno']=176;
					$m['boardArr']['__getitem__'](i['__getitem__']($constant_int_0))['__setitem__'](i['__getitem__']($constant_int_1), $constant_int_0);
				}
			}
			if ($pyjs['trackstack']['length'] > $pyjs__trackstack_size_1) {
				$pyjs['trackstack'] = $pyjs['trackstack']['slice'](0,$pyjs__trackstack_size_1);
				$pyjs['track'] = $pyjs['trackstack']['slice'](-1)[0];
			}
			$pyjs['track']['module']='game3';
			$pyjs['trackstack']['pop']();$pyjs['track']=$pyjs['trackstack']['pop']();$pyjs['trackstack']['push']($pyjs['track']);
			return null;
		};
		$m['collapseGroup']['__name__'] = 'collapseGroup';

		$m['collapseGroup']['__bind_type__'] = 0;
		$m['collapseGroup']['__args__'] = [null,null,['group']];
		$pyjs['track']['lineno']=178;
		$m['collapse'] = function() {
			if ($pyjs['options']['arg_count'] && arguments['length'] != 0) $pyjs__exception_func_param(arguments['callee']['__name__'], 0, 0, arguments['length']);
			var j,$iter6_type,$mul8,$sub40,$sub41,$iter6_iter,$sub42,startPos,$iter6_nextval,group,$iter7_type,$iter6_idx,$sub39,$iter7_iter,$iter6_array,$mul9,$iter7_idx,$mul7,$mul6,$mul5,$mul12,$add53,$add54,$mul11,$iter7_nextval,$mul10,i,$iter7_array,$pyjs__trackstack_size_2,$pyjs__trackstack_size_1;
			$pyjs['track']={'module':'game3','lineno':178};$pyjs['trackstack']['push']($pyjs['track']);
			$pyjs['track']['module']='game3';
			$pyjs['track']['lineno']=178;
			$pyjs['track']['lineno']=179;
			$pyjs['track']['lineno']=180;
			$pyjs__trackstack_size_1=$pyjs['trackstack']['length'];
			$iter6_iter = $p['xrange']($constant_int_0, $p['__op_sub']($sub39=$m['boardArrHeight'],$sub40=$constant_int_1));
			$iter6_nextval=$p['__iter_prepare']($iter6_iter,false);
			while (typeof($p['__wrapped_next']($iter6_nextval)['$nextval']) != 'undefined') {
				i = $iter6_nextval['$nextval'];
				$pyjs['track']['lineno']=181;
				$pyjs__trackstack_size_2=$pyjs['trackstack']['length'];
				$iter7_iter = $p['xrange']($constant_int_0, $constant_int_10);
				$iter7_nextval=$p['__iter_prepare']($iter7_iter,false);
				while (typeof($p['__wrapped_next']($iter7_nextval)['$nextval']) != 'undefined') {
					j = $iter7_nextval['$nextval'];
					$pyjs['track']['lineno']=182;
					startPos = $p['__op_sub']($sub41=$constant_int_300,$sub42=(typeof ($mul5=$m['posY'])==typeof ($mul6=$constant_int_50) && typeof $mul5=='number'?
						$mul5*$mul6:
						$p['op_mul']($mul5,$mul6)));
					$pyjs['track']['lineno']=183;
					if ($p['bool'](($p['cmp']($p['__op_add']($add53=startPos,$add54=(typeof ($mul7=i)==typeof ($mul8=$constant_int_50) && typeof $mul7=='number'?
						$mul7*$mul8:
						$p['op_mul']($mul7,$mul8))), $constant_int_1000) == 1))) {
						$pyjs['track']['lineno']=184;
						break;
					}
					$pyjs['track']['lineno']=185;
					$m['collapseGroupHolder'] = (typeof ($mul11=$p['list']([(typeof ($mul9=$p['list']([$constant_int_0]))==typeof ($mul10=$constant_int_10) && typeof $mul9=='number'?
						$mul9*$mul10:
						$p['op_mul']($mul9,$mul10))]))==typeof ($mul12=$m['boardArrHeight']) && typeof $mul11=='number'?
						$mul11*$mul12:
						$p['op_mul']($mul11,$mul12));
					$pyjs['track']['lineno']=186;
					group = $m['getCollapseGroup'](i, j, $m['boardArr']['__getitem__'](i)['__getitem__'](j));
					$pyjs['track']['lineno']=187;
					if ($p['bool']($m['canCollapse'](group))) {
						$pyjs['track']['lineno']=188;
						$m['collapseGroup'](group);
					}
				}
				if ($pyjs['trackstack']['length'] > $pyjs__trackstack_size_2) {
					$pyjs['trackstack'] = $pyjs['trackstack']['slice'](0,$pyjs__trackstack_size_2);
					$pyjs['track'] = $pyjs['trackstack']['slice'](-1)[0];
				}
				$pyjs['track']['module']='game3';
			}
			if ($pyjs['trackstack']['length'] > $pyjs__trackstack_size_1) {
				$pyjs['trackstack'] = $pyjs['trackstack']['slice'](0,$pyjs__trackstack_size_1);
				$pyjs['track'] = $pyjs['trackstack']['slice'](-1)[0];
			}
			$pyjs['track']['module']='game3';
			$pyjs['track']['lineno']=191;
			(typeof collapseCharacter == "undefined"?$m['collapseCharacter']:collapseCharacter)();
			$pyjs['trackstack']['pop']();$pyjs['track']=$pyjs['trackstack']['pop']();$pyjs['trackstack']['push']($pyjs['track']);
			return null;
		};
		$m['collapse']['__name__'] = 'collapse';

		$m['collapse']['__bind_type__'] = 0;
		$m['collapse']['__args__'] = [null,null];
		$pyjs['track']['lineno']=193;
		$m['collapseCharacter'] = function() {
			if ($pyjs['options']['arg_count'] && arguments['length'] != 0) $pyjs__exception_func_param(arguments['callee']['__name__'], 0, 0, arguments['length']);
			var $add55,$add56,$add57,$add58;
			$pyjs['track']={'module':'game3','lineno':193};$pyjs['trackstack']['push']($pyjs['track']);
			$pyjs['track']['module']='game3';
			$pyjs['track']['lineno']=193;
			$pyjs['track']['lineno']=194;
			$pyjs['track']['lineno']=195;
			while ($p['bool']($p['op_eq']($m['boardArr']['__getitem__']($p['__op_add']($add55=$m['posY'],$add56=$constant_int_1))['__getitem__']($m['posX']), $constant_int_0))) {
				$pyjs['track']['lineno']=196;
				$m['posY'] = $p['__op_add']($add57=$m['posY'],$add58=$constant_int_1);
			}
			$pyjs['trackstack']['pop']();$pyjs['track']=$pyjs['trackstack']['pop']();$pyjs['trackstack']['push']($pyjs['track']);
			return null;
		};
		$m['collapseCharacter']['__name__'] = 'collapseCharacter';

		$m['collapseCharacter']['__bind_type__'] = 0;
		$m['collapseCharacter']['__args__'] = [null,null];
		$pyjs['track']['lineno']=198;
		$m['canMove'] = function(goal) {
			if ($pyjs['options']['arg_count'] && arguments['length'] != 1) $pyjs__exception_func_param(arguments['callee']['__name__'], 1, 1, arguments['length']);
			var $or17,$or16,$or18;
			$pyjs['track']={'module':'game3','lineno':198};$pyjs['trackstack']['push']($pyjs['track']);
			$pyjs['track']['module']='game3';
			$pyjs['track']['lineno']=198;
			$pyjs['track']['lineno']=199;
			if ($p['bool'](($p['bool']($or16=($p['cmp'](goal['__getitem__']($constant_int_0), $constant_int_0) == -1))?$or16:($p['bool']($or17=($p['cmp'](goal['__getitem__']($constant_int_1), $constant_int_0) == -1))?$or17:((($p['cmp'](goal['__getitem__']($constant_int_1), $constant_int_10))|1) == 1))))) {
				$pyjs['track']['lineno']=200;
				$p['printFunc'](['cant move because off screen y: ', goal['__getitem__']($constant_int_0), ' x: ', goal['__getitem__']($constant_int_1)], 1);
				$pyjs['track']['lineno']=201;
				$pyjs['track']['lineno']=201;
				var $pyjs__ret = false;
				$pyjs['trackstack']['pop']();$pyjs['track']=$pyjs['trackstack']['pop']();$pyjs['trackstack']['push']($pyjs['track']);
				return $pyjs__ret;
			}
			$pyjs['track']['lineno']=202;
			$pyjs['track']['lineno']=202;
			var $pyjs__ret = !$p['bool']($m['canEat'](goal));
			$pyjs['trackstack']['pop']();$pyjs['track']=$pyjs['trackstack']['pop']();$pyjs['trackstack']['push']($pyjs['track']);
			return $pyjs__ret;
		};
		$m['canMove']['__name__'] = 'canMove';

		$m['canMove']['__bind_type__'] = 0;
		$m['canMove']['__args__'] = [null,null,['goal']];
		$pyjs['track']['lineno']=204;
		$m['move'] = function(direction) {
			if ($pyjs['options']['arg_count'] && arguments['length'] != 1) $pyjs__exception_func_param(arguments['callee']['__name__'], 1, 1, arguments['length']);
			var $sub48,$sub49,$sub43,$sub44,$sub45,$sub46,$sub47,$add65,$add64,$add67,$add66,$add61,goal,$add63,$add62,$add69,$add68,$sub54,$sub53,$sub52,$sub51,$sub50,$add60,$add74,$add72,$add73,$add70,$add71,$add59;
			$pyjs['track']={'module':'game3','lineno':204};$pyjs['trackstack']['push']($pyjs['track']);
			$pyjs['track']['module']='game3';
			$pyjs['track']['lineno']=204;
			$pyjs['track']['lineno']=205;
			$pyjs['track']['lineno']=206;
			goal = $p['tuple']([$constant_int_0, $constant_int_0]);
			$pyjs['track']['lineno']=207;
			if ($p['bool']($p['op_eq'](direction, 'right'))) {
				$pyjs['track']['lineno']=208;
				goal = $p['tuple']([$m['posY'], $p['__op_add']($add59=$m['posX'],$add60=$constant_int_1)]);
			}
			else if ($p['bool']($p['op_eq'](direction, 'left'))) {
				$pyjs['track']['lineno']=210;
				goal = $p['tuple']([$m['posY'], $p['__op_sub']($sub43=$m['posX'],$sub44=$constant_int_1)]);
			}
			else if ($p['bool']($p['op_eq'](direction, 'down'))) {
				$pyjs['track']['lineno']=212;
				goal = $p['tuple']([$p['__op_add']($add61=$m['posY'],$add62=$constant_int_1), $m['posX']]);
			}
			$pyjs['track']['lineno']=213;
			if ($p['bool']($m['canMove'](goal))) {
				$pyjs['track']['lineno']=214;
				if ($p['bool']($p['op_eq'](direction, 'right'))) {
					$pyjs['track']['lineno']=215;
					$m['posX'] = $p['__op_add']($add63=$m['posX'],$add64=$constant_int_1);
				}
				else if ($p['bool']($p['op_eq'](direction, 'left'))) {
					$pyjs['track']['lineno']=217;
					$m['posX'] = $p['__op_sub']($sub45=$m['posX'],$sub46=$constant_int_1);
				}
				else if ($p['bool']($p['op_eq'](direction, 'down'))) {
					$pyjs['track']['lineno']=219;
					$m['posY'] = $p['__op_add']($add65=$m['posY'],$add66=$constant_int_1);
				}
			}
			else if ($p['bool']($m['canMove']($p['tuple']([$p['__op_sub']($sub47=goal['__getitem__']($constant_int_0),$sub48=$constant_int_1), goal['__getitem__']($constant_int_1)])))) {
				$pyjs['track']['lineno']=221;
				if ($p['bool']($p['op_eq'](direction, 'right'))) {
					$pyjs['track']['lineno']=222;
					$m['posX'] = $p['__op_add']($add67=$m['posX'],$add68=$constant_int_1);
				}
				else if ($p['bool']($p['op_eq'](direction, 'left'))) {
					$pyjs['track']['lineno']=224;
					$m['posX'] = $p['__op_sub']($sub49=$m['posX'],$sub50=$constant_int_1);
				}
				$pyjs['track']['lineno']=225;
				$m['posY'] = $p['__op_sub']($sub51=$m['posY'],$sub52=$constant_int_1);
			}
			else if ($p['bool']($m['canMove']($p['tuple']([$p['__op_add']($add69=goal['__getitem__']($constant_int_0),$add70=$constant_int_1), goal['__getitem__']($constant_int_1)])))) {
				$pyjs['track']['lineno']=227;
				if ($p['bool']($p['op_eq'](direction, 'right'))) {
					$pyjs['track']['lineno']=228;
					$m['posX'] = $p['__op_add']($add71=$m['posX'],$add72=$constant_int_1);
				}
				else if ($p['bool']($p['op_eq'](direction, 'left'))) {
					$pyjs['track']['lineno']=230;
					$m['posX'] = $p['__op_sub']($sub53=$m['posX'],$sub54=$constant_int_1);
				}
				$pyjs['track']['lineno']=231;
				$m['posY'] = $p['__op_add']($add73=$m['posY'],$add74=$constant_int_1);
			}
			$pyjs['track']['lineno']=233;
			$m['collapse']();
			$pyjs['track']['lineno']=234;
			(typeof renderScreen == "undefined"?$m['renderScreen']:renderScreen)();
			$pyjs['trackstack']['pop']();$pyjs['track']=$pyjs['trackstack']['pop']();$pyjs['trackstack']['push']($pyjs['track']);
			return null;
		};
		$m['move']['__name__'] = 'move';

		$m['move']['__bind_type__'] = 0;
		$m['move']['__args__'] = [null,null,['direction']];
		$pyjs['track']['lineno']=236;
		$m['renderScoreAndStomach'] = function() {
			if ($pyjs['options']['arg_count'] && arguments['length'] != 0) $pyjs__exception_func_param(arguments['callee']['__name__'], 0, 0, arguments['length']);
			var $div1,text,textpos,$div2,scoreText,font;
			$pyjs['track']={'module':'game3','lineno':236};$pyjs['trackstack']['push']($pyjs['track']);
			$pyjs['track']['module']='game3';
			$pyjs['track']['lineno']=236;
			$pyjs['track']['lineno']=237;
			if ($p['bool']($p['getattr']($m['pygame'], 'font'))) {
				$pyjs['track']['lineno']=238;
				font = $m['pygame']['font']['Font'](null, $constant_int_36);
				$pyjs['track']['lineno']=239;
				scoreText = $p['sprintf']('Score: %d    Belly Space: %d', $p['tuple']([$m['score'], $m['stomachSpace']]));
				$pyjs['track']['lineno']=240;
				text = font['render'](scoreText, $constant_int_1, $p['tuple']([$constant_int_0, $constant_int_0, $constant_int_0]));
				$pyjs['track']['lineno']=241;
				textpos = $pyjs_kwargs_call(text, 'get_rect', null, null, [{'centerx':(typeof ($div1=$m['DISPLAYSURF']['get_width']())==typeof ($div2=$constant_int_2) && typeof $div1=='number' && $div2 !== 0?
					$div1/$div2:
					$p['op_div']($div1,$div2))}]);
				$pyjs['track']['lineno']=242;
				$m['DISPLAYSURF']['blit'](text, textpos);
			}
			else {
				$pyjs['track']['lineno']=244;
				$p['printFunc'](['fonts disabled'], 1);
			}
			$pyjs['trackstack']['pop']();$pyjs['track']=$pyjs['trackstack']['pop']();$pyjs['trackstack']['push']($pyjs['track']);
			return null;
		};
		$m['renderScoreAndStomach']['__name__'] = 'renderScoreAndStomach';

		$m['renderScoreAndStomach']['__bind_type__'] = 0;
		$m['renderScoreAndStomach']['__args__'] = [null,null];
		$pyjs['track']['lineno']=245;
		$m['renderCharacter'] = function() {
			if ($pyjs['options']['arg_count'] && arguments['length'] != 0) $pyjs__exception_func_param(arguments['callee']['__name__'], 0, 0, arguments['length']);
			var $add89,$add88,$add100,$add83,$add82,$add81,$add80,$add87,$add86,$add85,$add84,$mul19,$add79,$mul28,$mul29,$mul26,$mul27,$mul24,$mul25,$mul22,$mul23,$mul20,$mul21,$mul17,$add98,$add99,$add77,$add94,$add95,$add96,$add97,$add90,$add91,$add92,$add93,$add75,$mul34,$add76,$mul16,$mul15,$mul14,$mul13,vertices,$add78,$mul18,$mul35,$mul36,$mul31,$mul30,$mul33,$mul32;
			$pyjs['track']={'module':'game3','lineno':245};$pyjs['trackstack']['push']($pyjs['track']);
			$pyjs['track']['module']='game3';
			$pyjs['track']['lineno']=245;
			$pyjs['track']['lineno']=246;
			$pyjs['track']['lineno']=249;
			vertices = $p['list']([$p['tuple']([(typeof ($mul13=$m['posX'])==typeof ($mul14=$constant_int_50) && typeof $mul13=='number'?
				$mul13*$mul14:
				$p['op_mul']($mul13,$mul14)), $constant_int_300]), $p['tuple']([$p['__op_add']($add75=(typeof ($mul15=$m['posX'])==typeof ($mul16=$constant_int_50) && typeof $mul15=='number'?
				$mul15*$mul16:
				$p['op_mul']($mul15,$mul16)),$add76=$constant_int_50), $constant_int_300]), $p['tuple']([$p['__op_add']($add77=(typeof ($mul17=$m['posX'])==typeof ($mul18=$constant_int_50) && typeof $mul17=='number'?
				$mul17*$mul18:
				$p['op_mul']($mul17,$mul18)),$add78=$constant_int_25), $p['__op_add']($add79=$constant_int_300,$add80=$constant_int_50)])]);
			$pyjs['track']['lineno']=250;
			if ($p['bool']($p['op_eq']($m['direction'], 'right'))) {
				$pyjs['track']['lineno']=251;
				vertices = $p['list']([$p['tuple']([(typeof ($mul19=$m['posX'])==typeof ($mul20=$constant_int_50) && typeof $mul19=='number'?
					$mul19*$mul20:
					$p['op_mul']($mul19,$mul20)), $constant_int_300]), $p['tuple']([$p['__op_add']($add81=(typeof ($mul21=$m['posX'])==typeof ($mul22=$constant_int_50) && typeof $mul21=='number'?
					$mul21*$mul22:
					$p['op_mul']($mul21,$mul22)),$add82=$constant_int_50), $p['__op_add']($add83=$constant_int_300,$add84=$constant_int_25)]), $p['tuple']([(typeof ($mul23=$m['posX'])==typeof ($mul24=$constant_int_50) && typeof $mul23=='number'?
					$mul23*$mul24:
					$p['op_mul']($mul23,$mul24)), $p['__op_add']($add85=$constant_int_300,$add86=$constant_int_50)])]);
			}
			else if ($p['bool']($p['op_eq']($m['direction'], 'left'))) {
				$pyjs['track']['lineno']=253;
				vertices = $p['list']([$p['tuple']([$p['__op_add']($add87=(typeof ($mul25=$m['posX'])==typeof ($mul26=$constant_int_50) && typeof $mul25=='number'?
					$mul25*$mul26:
					$p['op_mul']($mul25,$mul26)),$add88=$constant_int_50), $constant_int_300]), $p['tuple']([$p['__op_add']($add89=(typeof ($mul27=$m['posX'])==typeof ($mul28=$constant_int_50) && typeof $mul27=='number'?
					$mul27*$mul28:
					$p['op_mul']($mul27,$mul28)),$add90=$constant_int_50), $p['__op_add']($add91=$constant_int_300,$add92=$constant_int_50)]), $p['tuple']([(typeof ($mul29=$m['posX'])==typeof ($mul30=$constant_int_50) && typeof $mul29=='number'?
					$mul29*$mul30:
					$p['op_mul']($mul29,$mul30)), $p['__op_add']($add93=$constant_int_300,$add94=$constant_int_25)])]);
			}
			else if ($p['bool']($p['op_eq']($m['direction'], 'down'))) {
				$pyjs['track']['lineno']=255;
				vertices = $p['list']([$p['tuple']([(typeof ($mul31=$m['posX'])==typeof ($mul32=$constant_int_50) && typeof $mul31=='number'?
					$mul31*$mul32:
					$p['op_mul']($mul31,$mul32)), $constant_int_300]), $p['tuple']([$p['__op_add']($add95=(typeof ($mul33=$m['posX'])==typeof ($mul34=$constant_int_50) && typeof $mul33=='number'?
					$mul33*$mul34:
					$p['op_mul']($mul33,$mul34)),$add96=$constant_int_50), $constant_int_300]), $p['tuple']([$p['__op_add']($add97=(typeof ($mul35=$m['posX'])==typeof ($mul36=$constant_int_50) && typeof $mul35=='number'?
					$mul35*$mul36:
					$p['op_mul']($mul35,$mul36)),$add98=$constant_int_25), $p['__op_add']($add99=$constant_int_300,$add100=$constant_int_50)])]);
			}
			$pyjs['track']['lineno']=258;
			$m['pygame']['draw']['polygon']($m['DISPLAYSURF'], $p['tuple']([$constant_int_190, $constant_int_78, $constant_int_89]), vertices, $constant_int_0);
			$pyjs['track']['lineno']=259;
			$p['printFunc']([$m['posY'], ', ', $m['posX']], 1);
			$pyjs['trackstack']['pop']();$pyjs['track']=$pyjs['trackstack']['pop']();$pyjs['trackstack']['push']($pyjs['track']);
			return null;
		};
		$m['renderCharacter']['__name__'] = 'renderCharacter';

		$m['renderCharacter']['__bind_type__'] = 0;
		$m['renderCharacter']['__args__'] = [null,null];
		$pyjs['track']['lineno']=262;
		$m['renderScreen'] = function() {
			if ($pyjs['options']['arg_count'] && arguments['length'] != 0) $pyjs__exception_func_param(arguments['callee']['__name__'], 0, 0, arguments['length']);
			var $sub56,color,$mul40,$add103,$mul41,$iter8_iter,$add105,startPos,tileType,$mul48,$iter9_iter,PURPLE,$mul45,$mul46,$mul47,$iter9_nextval,$iter9_idx,$mul42,$mul43,$mul39,$or20,$iter9_type,$or22,$add101,BLUE,$sub55,$add102,$iter8_idx,$add104,$add106,$iter8_type,$iter8_nextval,WHITE,$mul37,PINK,i,j,$iter8_array,$or21,$mul44,$pyjs__trackstack_size_2,$mul38,$pyjs__trackstack_size_1,$or19,$iter9_array;
			$pyjs['track']={'module':'game3','lineno':262};$pyjs['trackstack']['push']($pyjs['track']);
			$pyjs['track']['module']='game3';
			$pyjs['track']['lineno']=262;
			$pyjs['track']['lineno']=263;
			$pyjs['track']['lineno']=265;
			PINK = $p['tuple']([$constant_int_255, $constant_int_0, $constant_int_128]);
			$pyjs['track']['lineno']=266;
			PURPLE = $p['tuple']([$constant_int_147, $constant_int_112, $constant_int_219]);
			$pyjs['track']['lineno']=267;
			BLUE = $p['tuple']([$constant_int_135, $constant_int_216, $constant_int_250]);
			$pyjs['track']['lineno']=268;
			WHITE = $p['tuple']([$constant_int_255, $constant_int_255, $constant_int_255]);
			$pyjs['track']['lineno']=269;
			color = WHITE;
			$pyjs['track']['lineno']=270;
			$m['DISPLAYSURF']['fill']($p['tuple']([$constant_int_255, $constant_int_255, $constant_int_255]));
			$pyjs['track']['lineno']=271;
			$pyjs__trackstack_size_1=$pyjs['trackstack']['length'];
			$iter8_iter = $p['xrange']($constant_int_0, $m['boardArrHeight']);
			$iter8_nextval=$p['__iter_prepare']($iter8_iter,false);
			while (typeof($p['__wrapped_next']($iter8_nextval)['$nextval']) != 'undefined') {
				i = $iter8_nextval['$nextval'];
				$pyjs['track']['lineno']=272;
				$pyjs__trackstack_size_2=$pyjs['trackstack']['length'];
				$iter9_iter = $p['xrange']($constant_int_0, $constant_int_10);
				$iter9_nextval=$p['__iter_prepare']($iter9_iter,false);
				while (typeof($p['__wrapped_next']($iter9_nextval)['$nextval']) != 'undefined') {
					j = $iter9_nextval['$nextval'];
					$pyjs['track']['lineno']=273;
					tileType = $m['boardArr']['__getitem__'](i)['__getitem__'](j);
					$pyjs['track']['lineno']=275;
					if ($p['bool'](($p['bool']($or19=$p['op_eq'](tileType, $constant_int_1))?$or19:$p['op_eq'](tileType, '1')))) {
						$pyjs['track']['lineno']=276;
						$p['printFunc'](['PINK'], 1);
						$pyjs['track']['lineno']=277;
						color = PINK;
					}
					else if ($p['bool']($p['op_eq'](tileType, $constant_int_2))) {
						$pyjs['track']['lineno']=279;
						$p['printFunc'](['PURPLE'], 1);
						$pyjs['track']['lineno']=280;
						color = PURPLE;
					}
					else if ($p['bool']($p['op_eq'](tileType, $constant_int_3))) {
						$pyjs['track']['lineno']=282;
						$p['printFunc'](['BLUE'], 1);
						$pyjs['track']['lineno']=283;
						color = BLUE;
					}
					else if ($p['bool'](($p['bool']($or21=$p['op_eq'](tileType, $constant_int_4))?$or21:$p['op_eq'](tileType, $constant_int_5)))) {
						$pyjs['track']['lineno']=285;
						color = $p['tuple']([$constant_int_0, $constant_int_0, $constant_int_0]);
					}
					else {
						$pyjs['track']['lineno']=287;
						color = WHITE;
					}
					$pyjs['track']['lineno']=288;
					startPos = $p['__op_sub']($sub55=$constant_int_300,$sub56=(typeof ($mul37=$m['posY'])==typeof ($mul38=$constant_int_50) && typeof $mul37=='number'?
						$mul37*$mul38:
						$p['op_mul']($mul37,$mul38)));
					$pyjs['track']['lineno']=289;
					if ($p['bool'](($p['cmp']($p['__op_add']($add101=startPos,$add102=(typeof ($mul39=i)==typeof ($mul40=$constant_int_50) && typeof $mul39=='number'?
						$mul39*$mul40:
						$p['op_mul']($mul39,$mul40))), $constant_int_1000) == 1))) {
						$pyjs['track']['lineno']=290;
						break;
					}
					$pyjs['track']['lineno']=291;
					$m['pygame']['draw']['rect']($m['DISPLAYSURF'], color, $m['pygame']['Rect']((typeof ($mul41=j)==typeof ($mul42=$constant_int_50) && typeof $mul41=='number'?
						$mul41*$mul42:
						$p['op_mul']($mul41,$mul42)), $p['__op_add']($add103=startPos,$add104=(typeof ($mul43=i)==typeof ($mul44=$constant_int_50) && typeof $mul43=='number'?
						$mul43*$mul44:
						$p['op_mul']($mul43,$mul44))), $constant_int_50, $constant_int_50), $constant_int_0);
					$pyjs['track']['lineno']=292;
					$m['pygame']['draw']['rect']($m['DISPLAYSURF'], WHITE, $m['pygame']['Rect']((typeof ($mul45=j)==typeof ($mul46=$constant_int_50) && typeof $mul45=='number'?
						$mul45*$mul46:
						$p['op_mul']($mul45,$mul46)), $p['__op_add']($add105=startPos,$add106=(typeof ($mul47=i)==typeof ($mul48=$constant_int_50) && typeof $mul47=='number'?
						$mul47*$mul48:
						$p['op_mul']($mul47,$mul48))), $constant_int_50, $constant_int_50), $constant_int_5);
				}
				if ($pyjs['trackstack']['length'] > $pyjs__trackstack_size_2) {
					$pyjs['trackstack'] = $pyjs['trackstack']['slice'](0,$pyjs__trackstack_size_2);
					$pyjs['track'] = $pyjs['trackstack']['slice'](-1)[0];
				}
				$pyjs['track']['module']='game3';
			}
			if ($pyjs['trackstack']['length'] > $pyjs__trackstack_size_1) {
				$pyjs['trackstack'] = $pyjs['trackstack']['slice'](0,$pyjs__trackstack_size_1);
				$pyjs['track'] = $pyjs['trackstack']['slice'](-1)[0];
			}
			$pyjs['track']['module']='game3';
			$pyjs['track']['lineno']=294;
			$m['renderScoreAndStomach']();
			$pyjs['track']['lineno']=295;
			$m['renderCharacter']();
			$pyjs['track']['lineno']=296;
			$m['pygame']['display']['flip']();
			$pyjs['trackstack']['pop']();$pyjs['track']=$pyjs['trackstack']['pop']();$pyjs['trackstack']['push']($pyjs['track']);
			return null;
		};
		$m['renderScreen']['__name__'] = 'renderScreen';

		$m['renderScreen']['__bind_type__'] = 0;
		$m['renderScreen']['__args__'] = [null,null];
		$pyjs['track']['lineno']=301;
		$m['die'] = function() {
			if ($pyjs['options']['arg_count'] && arguments['length'] != 0) $pyjs__exception_func_param(arguments['callee']['__name__'], 0, 0, arguments['length']);

			$pyjs['track']={'module':'game3','lineno':301};$pyjs['trackstack']['push']($pyjs['track']);
			$pyjs['track']['module']='game3';
			$pyjs['track']['lineno']=301;
			$pyjs['track']['lineno']=302;
			$p['printFunc'](['collapsed on character'], 1);
			$pyjs['trackstack']['pop']();$pyjs['track']=$pyjs['trackstack']['pop']();$pyjs['trackstack']['push']($pyjs['track']);
			return null;
		};
		$m['die']['__name__'] = 'die';

		$m['die']['__bind_type__'] = 0;
		$m['die']['__args__'] = [null,null];
		$pyjs['track']['lineno']=305;
		if ($p['bool']($p['op_eq']((typeof __name__ == "undefined"?$m['__name__']:__name__), '__main__'))) {
			$pyjs['track']['lineno']=306;
			$m['main']();
		}
	} catch ($pyjs_attr_err) {throw $p['_errorMapping']($pyjs_attr_err);};
	return this;
}; /* end game3 */


/* end module: game3 */


/*
PYJS_DEPS: ['random', 'time', 'sys', 'pygame.locals', 'pygame', 'pyjsdl']
*/
