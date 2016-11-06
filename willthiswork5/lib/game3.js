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
		$m.__track_lines__[4] = 'game3.py, line 4:\n    import pyjsdl as pygame';
		$m.__track_lines__[6] = 'game3.py, line 6:\n    from textdata import txtFile';
		$m.__track_lines__[10] = 'game3.py, line 10:\n    WINDOWWIDTH = 500';
		$m.__track_lines__[11] = 'game3.py, line 11:\n    WINDOWHEIGHT = 700';
		$m.__track_lines__[12] = 'game3.py, line 12:\n    boardArrHeight = 200';
		$m.__track_lines__[13] = 'game3.py, line 13:\n    boardArr = []';
		$m.__track_lines__[14] = 'game3.py, line 14:\n    posX = 5 #chracter position';
		$m.__track_lines__[15] = 'game3.py, line 15:\n    posY = 0';
		$m.__track_lines__[16] = 'game3.py, line 16:\n    direction = "down"';
		$m.__track_lines__[17] = 'game3.py, line 17:\n    score = 0';
		$m.__track_lines__[18] = 'game3.py, line 18:\n    stomachSpace = 100';
		$m.__track_lines__[19] = 'game3.py, line 19:\n    numLives = 0';
		$m.__track_lines__[20] = 'game3.py, line 20:\n    collapseGroupHolder = [[0]*10]*boardArrHeight';
		$m.__track_lines__[22] = 'game3.py, line 22:\n    def initBoardArr():';
		$m.__track_lines__[23] = 'game3.py, line 23:\n    global boardArr,txtFile,boardArrHeight';
		$m.__track_lines__[29] = 'game3.py, line 29:\n    count = 0';
		$m.__track_lines__[30] = 'game3.py, line 30:\n    innerList = []';
		$m.__track_lines__[31] = 'game3.py, line 31:\n    txtFile = txtFile.rstrip()';
		$m.__track_lines__[32] = 'game3.py, line 32:\n    for row in txtFile:';
		$m.__track_lines__[33] = 'game3.py, line 33:\n    if not row.isdigit():';
		$m.__track_lines__[34] = 'game3.py, line 34:\n    continue';
		$m.__track_lines__[36] = 'game3.py, line 36:\n    innerList.append(int(row))';
		$m.__track_lines__[37] = 'game3.py, line 37:\n    count += 1';
		$m.__track_lines__[39] = 'game3.py, line 39:\n    boardArr.append(innerList)';
		$m.__track_lines__[40] = 'game3.py, line 40:\n    count = 0';
		$m.__track_lines__[41] = 'game3.py, line 41:\n    innerList=[]';
		$m.__track_lines__[44] = 'game3.py, line 44:\n    boardArrHeight = len(boardArr)';
		$m.__track_lines__[45] = 'game3.py, line 45:\n    print boardArr';
		$m.__track_lines__[46] = 'game3.py, line 46:\n    print "** ", boardArr[0]';
		$m.__track_lines__[47] = 'game3.py, line 47:\n    print "**** ", boardArr[0][0]';
		$m.__track_lines__[49] = 'game3.py, line 49:\n    def main():';
		$m.__track_lines__[50] = 'game3.py, line 50:\n    global FPSCLOCK, DISPLAYSURF, BASICFONT, BIGFONT';
		$m.__track_lines__[51] = 'game3.py, line 51:\n    pygame.init()';
		$m.__track_lines__[52] = 'game3.py, line 52:\n    print "in main"';
		$m.__track_lines__[53] = 'game3.py, line 53:\n    FPSCLOCK = pygame.time.Clock()';
		$m.__track_lines__[54] = 'game3.py, line 54:\n    DISPLAYSURF = pygame.display.set_mode((WINDOWWIDTH, WINDOWHEIGHT))';
		$m.__track_lines__[55] = 'game3.py, line 55:\n    DISPLAYSURF.fill((255,255,255))';
		$m.__track_lines__[56] = "game3.py, line 56:\n    BASICFONT = pygame.font.Font('freesansbold.ttf', 18)";
		$m.__track_lines__[57] = "game3.py, line 57:\n    BIGFONT = pygame.font.Font('freesansbold.ttf', 100)";
		$m.__track_lines__[58] = "game3.py, line 58:\n    pygame.display.set_caption('Cotton Candy')";
		$m.__track_lines__[59] = 'game3.py, line 59:\n    initBoardArr()';
		$m.__track_lines__[60] = 'game3.py, line 60:\n    renderScreen()';
		$m.__track_lines__[61] = 'game3.py, line 61:\n    while True: # game loop';
		$m.__track_lines__[62] = 'game3.py, line 62:\n    runGame()';
		$m.__track_lines__[63] = "game3.py, line 63:\n    showTextScreen('Game Over')";
		$m.__track_lines__[64] = 'game3.py, line 64:\n    def runGame():';
		$m.__track_lines__[65] = 'game3.py, line 65:\n    global posX, posY,direction';
		$m.__track_lines__[66] = 'game3.py, line 66:\n    while True:';
		$m.__track_lines__[67] = 'game3.py, line 67:\n    collapse() #may be superfluous';
		$m.__track_lines__[68] = 'game3.py, line 68:\n    for event in pygame.event.get(): # event handling loop';
		$m.__track_lines__[69] = 'game3.py, line 69:\n    if event.type == KEYDOWN:';
		$m.__track_lines__[70] = 'game3.py, line 70:\n    if (event.key == K_LEFT or event.key == K_a):';
		$m.__track_lines__[71] = 'game3.py, line 71:\n    print "left pressed"';
		$m.__track_lines__[72] = 'game3.py, line 72:\n    if(direction == "left"):';
		$m.__track_lines__[73] = 'game3.py, line 73:\n    move(direction)';
		$m.__track_lines__[74] = 'game3.py, line 74:\n    direction = "left"';
		$m.__track_lines__[76] = 'game3.py, line 76:\n    print "right pressed"';
		$m.__track_lines__[77] = 'game3.py, line 77:\n    if(direction == "right"):';
		$m.__track_lines__[78] = 'game3.py, line 78:\n    move(direction)';
		$m.__track_lines__[79] = 'game3.py, line 79:\n    direction = "right"';
		$m.__track_lines__[81] = 'game3.py, line 81:\n    print "up pressed"';
		$m.__track_lines__[82] = 'game3.py, line 82:\n    direction == "up"';
		$m.__track_lines__[84] = 'game3.py, line 84:\n    print "down pressed"';
		$m.__track_lines__[85] = 'game3.py, line 85:\n    if(direction == "down"):';
		$m.__track_lines__[86] = 'game3.py, line 86:\n    move(direction)';
		$m.__track_lines__[87] = 'game3.py, line 87:\n    direction = "down"';
		$m.__track_lines__[89] = 'game3.py, line 89:\n    print "eating direction is ", direction';
		$m.__track_lines__[90] = 'game3.py, line 90:\n    eat(direction)';
		$m.__track_lines__[91] = 'game3.py, line 91:\n    renderScreen()';
		$m.__track_lines__[92] = 'game3.py, line 92:\n    def canEat(goal):';
		$m.__track_lines__[93] = 'game3.py, line 93:\n    global boardArr';
		$m.__track_lines__[94] = 'game3.py, line 94:\n    if goal[0] < 0 or goal[1] < 0 or goal[1] >=10:';
		$m.__track_lines__[95] = 'game3.py, line 95:\n    print "cant eat because off screen"';
		$m.__track_lines__[96] = 'game3.py, line 96:\n    return False';
		$m.__track_lines__[97] = 'game3.py, line 97:\n    row = goal[0]';
		$m.__track_lines__[98] = 'game3.py, line 98:\n    col = goal[1]';
		$m.__track_lines__[99] = 'game3.py, line 99:\n    if boardArr[row][col] == 0:';
		$m.__track_lines__[100] = 'game3.py, line 100:\n    print "cant eat because empty there: " ,direction';
		$m.__track_lines__[101] = 'game3.py, line 101:\n    return False';
		$m.__track_lines__[103] = 'game3.py, line 103:\n    return True';
		$m.__track_lines__[106] = 'game3.py, line 106:\n    def eat(direction):';
		$m.__track_lines__[107] = 'game3.py, line 107:\n    global posX,posY,boardArr,stomachSpace, score';
		$m.__track_lines__[108] = 'game3.py, line 108:\n    goal = (0,0)';
		$m.__track_lines__[109] = 'game3.py, line 109:\n    if direction == "right":';
		$m.__track_lines__[110] = 'game3.py, line 110:\n    goal = (posY,posX+1)';
		$m.__track_lines__[112] = 'game3.py, line 112:\n    goal = (posY,posX-1)';
		$m.__track_lines__[114] = 'game3.py, line 114:\n    goal = (posY+1,posX)';
		$m.__track_lines__[117] = 'game3.py, line 117:\n    if canEat(goal):';
		$m.__track_lines__[118] = 'game3.py, line 118:\n    stomachSpace -= 1';
		$m.__track_lines__[119] = 'game3.py, line 119:\n    row = goal[0]';
		$m.__track_lines__[120] = 'game3.py, line 120:\n    col = goal[1]';
		$m.__track_lines__[121] = 'game3.py, line 121:\n    getEatGroup(goal,boardArr[row][col])';
		$m.__track_lines__[124] = 'game3.py, line 124:\n    collapse()';
		$m.__track_lines__[125] = 'game3.py, line 125:\n    renderScreen()';
		$m.__track_lines__[127] = 'game3.py, line 127:\n    def getEatGroup(goal,tileType):';
		$m.__track_lines__[128] = 'game3.py, line 128:\n    global boardArr, score';
		$m.__track_lines__[129] = 'game3.py, line 129:\n    row = goal[0]';
		$m.__track_lines__[130] = 'game3.py, line 130:\n    col = goal[1]';
		$m.__track_lines__[131] = 'game3.py, line 131:\n    print "tile type is: ",boardArr[row][col]';
		$m.__track_lines__[133] = 'game3.py, line 133:\n    boardArr[row][col] = 0';
		$m.__track_lines__[134] = 'game3.py, line 134:\n    score += 1';
		$m.__track_lines__[135] = 'game3.py, line 135:\n    if col+1 < 10 and boardArr[row][col+1] == tileType:';
		$m.__track_lines__[136] = 'game3.py, line 136:\n    getEatGroup((row,col+1),tileType)';
		$m.__track_lines__[137] = 'game3.py, line 137:\n    if col-1 >= 0 and boardArr[row][col-1] == tileType:';
		$m.__track_lines__[138] = 'game3.py, line 138:\n    getEatGroup((row,col-1),tileType)';
		$m.__track_lines__[139] = 'game3.py, line 139:\n    if boardArr[row+1][col] == tileType:';
		$m.__track_lines__[140] = 'game3.py, line 140:\n    getEatGroup((row+1,col),tileType)';
		$m.__track_lines__[141] = 'game3.py, line 141:\n    if row-1 >= 0 and boardArr[row-1][col] == tileType:';
		$m.__track_lines__[142] = 'game3.py, line 142:\n    getEatGroup((row-1,col),tileType)';
		$m.__track_lines__[145] = 'game3.py, line 145:\n    def collapsable(row,col,num):';
		$m.__track_lines__[146] = 'game3.py, line 146:\n    global boardArr';
		$m.__track_lines__[147] = 'game3.py, line 147:\n    sameType = boardArr[row][col]';
		$m.__track_lines__[148] = 'game3.py, line 148:\n    if sameType == 0:';
		$m.__track_lines__[149] = 'game3.py, line 149:\n    return False';
		$m.__track_lines__[150] = 'game3.py, line 150:\n    if col+1 <10 and (boardArr[row][col+1] == sameType or num>0): #right one';
		$m.__track_lines__[151] = 'game3.py, line 151:\n    if not collapsable(row,col+1,num+1):';
		$m.__track_lines__[152] = 'game3.py, line 152:\n    return False';
		$m.__track_lines__[153] = 'game3.py, line 153:\n    if row-1>=0 and (boardArr[row-1][col] == sameType or num>0):';
		$m.__track_lines__[154] = 'game3.py, line 154:\n    if not collapsable(row-1,col,num+1):';
		$m.__track_lines__[155] = 'game3.py, line 155:\n    return False';
		$m.__track_lines__[156] = 'game3.py, line 156:\n    return True';
		$m.__track_lines__[158] = 'game3.py, line 158:\n    def getCollapseGroup(row,col,tileType): #new group collapsing methods is ???';
		$m.__track_lines__[159] = 'game3.py, line 159:\n    global boardArr, score, collapseGroupHolder';
		$m.__track_lines__[160] = 'game3.py, line 160:\n    group = []';
		$m.__track_lines__[161] = 'game3.py, line 161:\n    done = 0';
		$m.__track_lines__[162] = 'game3.py, line 162:\n    if collapseGroupHolder[row][col] == 0:';
		$m.__track_lines__[163] = 'game3.py, line 163:\n    group.append((row,col))';
		$m.__track_lines__[164] = 'game3.py, line 164:\n    collapseGroupHolder[row][col] = 1';
		$m.__track_lines__[165] = 'game3.py, line 165:\n    if col+1 < 10 and boardArr[row][col+1] == tileType and collapseGroupHolder[row][col+1] == 0:';
		$m.__track_lines__[166] = 'game3.py, line 166:\n    group.extend(getCollapseGroup(row,col+1,tileType))';
		$m.__track_lines__[167] = 'game3.py, line 167:\n    if col-1 >= 0 and boardArr[row][col-1] == tileType and collapseGroupHolder[row][col-1] == 0:';
		$m.__track_lines__[168] = 'game3.py, line 168:\n    group.extend(getCollapseGroup(row,col-1,tileType))';
		$m.__track_lines__[169] = 'game3.py, line 169:\n    if row+1 < boardArrHeight and boardArr[row+1][col] == tileType and collapseGroupHolder[row+1][col] == 0:';
		$m.__track_lines__[170] = 'game3.py, line 170:\n    group.extend(getCollapseGroup(row+1,col,tileType))';
		$m.__track_lines__[171] = 'game3.py, line 171:\n    if row-1 >= 0 and boardArr[row-1][col] == tileType and collapseGroupHolder[row-1][col] == 0:';
		$m.__track_lines__[172] = 'game3.py, line 172:\n    group.extend(getCollapseGroup(row-1,col,tileType))';
		$m.__track_lines__[175] = 'game3.py, line 175:\n    return group';
		$m.__track_lines__[177] = 'game3.py, line 177:\n    def canCollapse(group):';
		$m.__track_lines__[178] = 'game3.py, line 178:\n    global boardArr';
		$m.__track_lines__[179] = 'game3.py, line 179:\n    can = True';
		$m.__track_lines__[180] = 'game3.py, line 180:\n    for i in group:';
		$m.__track_lines__[181] = 'game3.py, line 181:\n    if (i[0]+1,i[1]) not in group and i[0]+1 < boardArrHeight and boardArr[i[0]+1][i[1]] != 0:';
		$m.__track_lines__[182] = 'game3.py, line 182:\n    can = False';
		$m.__track_lines__[185] = 'game3.py, line 185:\n    return can';
		$m.__track_lines__[187] = 'game3.py, line 187:\n    def collapseGroup(group):';
		$m.__track_lines__[188] = 'game3.py, line 188:\n    global boardArr';
		$m.__track_lines__[189] = 'game3.py, line 189:\n    for i in group:';
		$m.__track_lines__[190] = 'game3.py, line 190:\n    if i[0]+1 < boardArrHeight:';
		$m.__track_lines__[191] = 'game3.py, line 191:\n    boardArr[i[0]+1][i[1]] = boardArr[i[0]][i[1]]';
		$m.__track_lines__[192] = 'game3.py, line 192:\n    boardArr[i[0]][i[1]] = 0';
		$m.__track_lines__[194] = 'game3.py, line 194:\n    def collapse():';
		$m.__track_lines__[195] = 'game3.py, line 195:\n    global posX,posY,boardArr, collapseGroupHolder';
		$m.__track_lines__[196] = 'game3.py, line 196:\n    for i in xrange(0,boardArrHeight-1): #can make faster by starting dif pos';
		$m.__track_lines__[197] = 'game3.py, line 197:\n    for j in xrange(0,10):';
		$m.__track_lines__[198] = 'game3.py, line 198:\n    startPos = 300-posY*50';
		$m.__track_lines__[199] = 'game3.py, line 199:\n    if startPos+i*50 > 1000:';
		$m.__track_lines__[200] = 'game3.py, line 200:\n    break';
		$m.__track_lines__[201] = 'game3.py, line 201:\n    collapseGroupHolder =  [[0]*10]*boardArrHeight';
		$m.__track_lines__[202] = 'game3.py, line 202:\n    group = getCollapseGroup(i,j,boardArr[i][j])';
		$m.__track_lines__[203] = 'game3.py, line 203:\n    if canCollapse(group):';
		$m.__track_lines__[204] = 'game3.py, line 204:\n    collapseGroup(group)';
		$m.__track_lines__[207] = 'game3.py, line 207:\n    collapseCharacter()';
		$m.__track_lines__[209] = 'game3.py, line 209:\n    def collapseCharacter():';
		$m.__track_lines__[210] = 'game3.py, line 210:\n    global posX,posY,boardArr';
		$m.__track_lines__[211] = 'game3.py, line 211:\n    while (boardArr[posY+1][posX] == 0):';
		$m.__track_lines__[212] = 'game3.py, line 212:\n    posY += 1';
		$m.__track_lines__[214] = 'game3.py, line 214:\n    def canMove(goal):';
		$m.__track_lines__[215] = 'game3.py, line 215:\n    if goal[0] < 0 or goal[1] < 0 or goal[1] >=10:';
		$m.__track_lines__[216] = 'game3.py, line 216:\n    print "cant move because off screen y: ",goal[0]," x: ",goal[1]';
		$m.__track_lines__[217] = 'game3.py, line 217:\n    return False';
		$m.__track_lines__[218] = 'game3.py, line 218:\n    return not(canEat(goal))';
		$m.__track_lines__[220] = 'game3.py, line 220:\n    def move(direction):';
		$m.__track_lines__[221] = 'game3.py, line 221:\n    global posX, posY,boardArr';
		$m.__track_lines__[222] = 'game3.py, line 222:\n    goal = (0,0)';
		$m.__track_lines__[223] = 'game3.py, line 223:\n    if direction == "right":';
		$m.__track_lines__[224] = 'game3.py, line 224:\n    goal = (posY,posX+1)';
		$m.__track_lines__[226] = 'game3.py, line 226:\n    goal = (posY,posX-1)';
		$m.__track_lines__[228] = 'game3.py, line 228:\n    goal = (posY+1,posX)';
		$m.__track_lines__[229] = 'game3.py, line 229:\n    if canMove(goal):';
		$m.__track_lines__[230] = 'game3.py, line 230:\n    if direction == "right":';
		$m.__track_lines__[231] = 'game3.py, line 231:\n    posX += 1';
		$m.__track_lines__[233] = 'game3.py, line 233:\n    posX = posX -1';
		$m.__track_lines__[235] = 'game3.py, line 235:\n    posY += 1';
		$m.__track_lines__[237] = 'game3.py, line 237:\n    if direction == "right":';
		$m.__track_lines__[238] = 'game3.py, line 238:\n    posX += 1';
		$m.__track_lines__[240] = 'game3.py, line 240:\n    posX -= 1';
		$m.__track_lines__[241] = 'game3.py, line 241:\n    posY -= 1';
		$m.__track_lines__[243] = 'game3.py, line 243:\n    if direction == "right":';
		$m.__track_lines__[244] = 'game3.py, line 244:\n    posX += 1';
		$m.__track_lines__[246] = 'game3.py, line 246:\n    posX -= 1';
		$m.__track_lines__[247] = 'game3.py, line 247:\n    posY += 1';
		$m.__track_lines__[249] = 'game3.py, line 249:\n    collapse()';
		$m.__track_lines__[250] = 'game3.py, line 250:\n    renderScreen()';
		$m.__track_lines__[252] = 'game3.py, line 252:\n    def renderScoreAndStomach():';
		$m.__track_lines__[253] = 'game3.py, line 253:\n    if pygame.font:';
		$m.__track_lines__[254] = 'game3.py, line 254:\n    font = pygame.font.Font(None, 36)';
		$m.__track_lines__[255] = 'game3.py, line 255:\n    scoreText = "Score: %d    Belly Space: %d" %(score,stomachSpace)';
		$m.__track_lines__[256] = 'game3.py, line 256:\n    text = font.render(scoreText, 1, (0, 0, 0))';
		$m.__track_lines__[257] = 'game3.py, line 257:\n    textpos = text.get_rect(centerx=DISPLAYSURF.get_width()/2)';
		$m.__track_lines__[258] = 'game3.py, line 258:\n    DISPLAYSURF.blit(text, textpos)';
		$m.__track_lines__[260] = 'game3.py, line 260:\n    print "fonts disabled"';
		$m.__track_lines__[261] = 'game3.py, line 261:\n    def renderCharacter():';
		$m.__track_lines__[262] = 'game3.py, line 262:\n    global posX,posY,boardArr, DISPLAYSURF,direction';
		$m.__track_lines__[265] = 'game3.py, line 265:\n    vertices = [(posX*50,300),(posX*50+50,300),(posX*50+25,300+50)]';
		$m.__track_lines__[266] = 'game3.py, line 266:\n    if direction == "right":';
		$m.__track_lines__[267] = 'game3.py, line 267:\n    vertices = [(posX*50,300),(posX*50+50,300+25),(posX*50,300+50)]';
		$m.__track_lines__[269] = 'game3.py, line 269:\n    vertices = [(posX*50+50,300),(posX*50+50,300+50),(posX*50,300+25)]';
		$m.__track_lines__[271] = 'game3.py, line 271:\n    vertices = [(posX*50,300),(posX*50+50,300),(posX*50+25,300+50)]';
		$m.__track_lines__[274] = 'game3.py, line 274:\n    pygame.draw.polygon(DISPLAYSURF,(190,78,89), vertices, 0)';
		$m.__track_lines__[275] = 'game3.py, line 275:\n    print posY, ", ", posX';
		$m.__track_lines__[278] = 'game3.py, line 278:\n    def renderScreen():';
		$m.__track_lines__[279] = 'game3.py, line 279:\n    global posX,posY,boardArr, boardArrHeight, DISPLAYSURF';
		$m.__track_lines__[281] = 'game3.py, line 281:\n    PINK = (255,0,128)';
		$m.__track_lines__[282] = 'game3.py, line 282:\n    PURPLE = (147,112,219)';
		$m.__track_lines__[283] = 'game3.py, line 283:\n    BLUE = (135,216,250)';
		$m.__track_lines__[284] = 'game3.py, line 284:\n    WHITE = (255,255,255)';
		$m.__track_lines__[285] = 'game3.py, line 285:\n    color = WHITE';
		$m.__track_lines__[286] = 'game3.py, line 286:\n    DISPLAYSURF.fill((255,255,255))';
		$m.__track_lines__[287] = 'game3.py, line 287:\n    for i in xrange(0,boardArrHeight):';
		$m.__track_lines__[288] = 'game3.py, line 288:\n    for j in xrange(0,10):';
		$m.__track_lines__[289] = 'game3.py, line 289:\n    tileType = boardArr[i][j]';
		$m.__track_lines__[291] = 'game3.py, line 291:\n    if tileType == 1 or tileType == "1":';
		$m.__track_lines__[292] = 'game3.py, line 292:\n    print "PINK"';
		$m.__track_lines__[293] = 'game3.py, line 293:\n    color = PINK';
		$m.__track_lines__[295] = 'game3.py, line 295:\n    print "PURPLE"';
		$m.__track_lines__[296] = 'game3.py, line 296:\n    color = PURPLE';
		$m.__track_lines__[298] = 'game3.py, line 298:\n    print "BLUE"';
		$m.__track_lines__[299] = 'game3.py, line 299:\n    color = BLUE';
		$m.__track_lines__[301] = 'game3.py, line 301:\n    color = (0,0,0)';
		$m.__track_lines__[303] = 'game3.py, line 303:\n    color = WHITE';
		$m.__track_lines__[304] = 'game3.py, line 304:\n    startPos = 300-posY*50';
		$m.__track_lines__[305] = 'game3.py, line 305:\n    if startPos+i*50 > 1000:';
		$m.__track_lines__[306] = 'game3.py, line 306:\n    break';
		$m.__track_lines__[307] = 'game3.py, line 307:\n    pygame.draw.rect(DISPLAYSURF,color,pygame.Rect(j*50,startPos+i*50,50,50),0)';
		$m.__track_lines__[308] = 'game3.py, line 308:\n    pygame.draw.rect(DISPLAYSURF,WHITE,pygame.Rect(j*50,startPos+i*50,50,50),5)';
		$m.__track_lines__[310] = 'game3.py, line 310:\n    renderScoreAndStomach()';
		$m.__track_lines__[311] = 'game3.py, line 311:\n    renderCharacter()';
		$m.__track_lines__[312] = 'game3.py, line 312:\n    pygame.display.flip()';
		$m.__track_lines__[317] = 'game3.py, line 317:\n    def die():';
		$m.__track_lines__[318] = 'game3.py, line 318:\n    print "collapsed on character" #what happens when you die';
		$m.__track_lines__[320] = "game3.py, line 320:\n    if __name__ == '__main__':";
		$m.__track_lines__[321] = 'game3.py, line 321:\n    main()';
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
		$pyjs['track']['lineno']=4;
		$pyjs['track']={'module':$pyjs['track']['module'],'lineno':$pyjs['track']['lineno']};$pyjs['trackstack']['push']($pyjs['track']);
		$m['pygame'] = $p['___import___']('pyjsdl', null, null, false);
		$pyjs['trackstack']['pop']();$pyjs['track']=$pyjs['trackstack']['pop']();$pyjs['trackstack']['push']($pyjs['track']);
		$pyjs['track']['lineno']=6;
		$pyjs['track']={'module':$pyjs['track']['module'],'lineno':$pyjs['track']['lineno']};$pyjs['trackstack']['push']($pyjs['track']);
		$m['txtFile'] = $p['___import___']('textdata.txtFile', null, null, false);
		$pyjs['trackstack']['pop']();$pyjs['track']=$pyjs['trackstack']['pop']();$pyjs['trackstack']['push']($pyjs['track']);
		$pyjs['track']['lineno']=10;
		$m['WINDOWWIDTH'] = $constant_int_500;
		$pyjs['track']['lineno']=11;
		$m['WINDOWHEIGHT'] = $constant_int_700;
		$pyjs['track']['lineno']=12;
		$m['boardArrHeight'] = $constant_int_200;
		$pyjs['track']['lineno']=13;
		$m['boardArr'] = $p['list']([]);
		$pyjs['track']['lineno']=14;
		$m['posX'] = $constant_int_5;
		$pyjs['track']['lineno']=15;
		$m['posY'] = $constant_int_0;
		$pyjs['track']['lineno']=16;
		$m['direction'] = 'down';
		$pyjs['track']['lineno']=17;
		$m['score'] = $constant_int_0;
		$pyjs['track']['lineno']=18;
		$m['stomachSpace'] = $constant_int_100;
		$pyjs['track']['lineno']=19;
		$m['numLives'] = $constant_int_0;
		$pyjs['track']['lineno']=20;
		$m['collapseGroupHolder'] = (typeof ($mul3=$p['list']([(typeof ($mul1=$p['list']([$constant_int_0]))==typeof ($mul2=$constant_int_10) && typeof $mul1=='number'?
			$mul1*$mul2:
			$p['op_mul']($mul1,$mul2))]))==typeof ($mul4=$m['boardArrHeight']) && typeof $mul3=='number'?
			$mul3*$mul4:
			$p['op_mul']($mul3,$mul4));
		$pyjs['track']['lineno']=22;
		$m['initBoardArr'] = function() {
			if ($pyjs['options']['arg_count'] && arguments['length'] != 0) $pyjs__exception_func_param(arguments['callee']['__name__'], 0, 0, arguments['length']);
			var count,$iter1_nextval,$iter1_type,$iter1_iter,$add2,innerList,$add1,$iter1_array,$pyjs__trackstack_size_1,row,$iter1_idx;
			$pyjs['track']={'module':'game3','lineno':22};$pyjs['trackstack']['push']($pyjs['track']);
			$pyjs['track']['module']='game3';
			$pyjs['track']['lineno']=22;
			$pyjs['track']['lineno']=23;
			$pyjs['track']['lineno']=29;
			count = $constant_int_0;
			$pyjs['track']['lineno']=30;
			innerList = $p['list']([]);
			$pyjs['track']['lineno']=31;
			$m['txtFile'] = $m['txtFile']['rstrip']();
			$pyjs['track']['lineno']=32;
			$pyjs__trackstack_size_1=$pyjs['trackstack']['length'];
			$iter1_iter = $m['txtFile'];
			$iter1_nextval=$p['__iter_prepare']($iter1_iter,false);
			while (typeof($p['__wrapped_next']($iter1_nextval)['$nextval']) != 'undefined') {
				row = $iter1_nextval['$nextval'];
				$pyjs['track']['lineno']=33;
				if ($p['bool'](!$p['bool'](row['isdigit']()))) {
					$pyjs['track']['lineno']=34;
					continue;
				}
				else if ($p['bool'](($p['cmp'](count, $constant_int_10) == -1))) {
					$pyjs['track']['lineno']=36;
					innerList['append']($p['int'](row));
					$pyjs['track']['lineno']=37;
					count = $p['__op_add']($add1=count,$add2=$constant_int_1);
				}
				else {
					$pyjs['track']['lineno']=39;
					$m['boardArr']['append'](innerList);
					$pyjs['track']['lineno']=40;
					count = $constant_int_0;
					$pyjs['track']['lineno']=41;
					innerList = $p['list']([]);
				}
			}
			if ($pyjs['trackstack']['length'] > $pyjs__trackstack_size_1) {
				$pyjs['trackstack'] = $pyjs['trackstack']['slice'](0,$pyjs__trackstack_size_1);
				$pyjs['track'] = $pyjs['trackstack']['slice'](-1)[0];
			}
			$pyjs['track']['module']='game3';
			$pyjs['track']['lineno']=44;
			$m['boardArrHeight'] = $p['len']($m['boardArr']);
			$pyjs['track']['lineno']=45;
			$p['printFunc']([$m['boardArr']], 1);
			$pyjs['track']['lineno']=46;
			$p['printFunc'](['** ', $m['boardArr']['__getitem__']($constant_int_0)], 1);
			$pyjs['track']['lineno']=47;
			$p['printFunc'](['**** ', $m['boardArr']['__getitem__']($constant_int_0)['__getitem__']($constant_int_0)], 1);
			$pyjs['trackstack']['pop']();$pyjs['track']=$pyjs['trackstack']['pop']();$pyjs['trackstack']['push']($pyjs['track']);
			return null;
		};
		$m['initBoardArr']['__name__'] = 'initBoardArr';

		$m['initBoardArr']['__bind_type__'] = 0;
		$m['initBoardArr']['__args__'] = [null,null];
		$pyjs['track']['lineno']=49;
		$m['main'] = function() {
			if ($pyjs['options']['arg_count'] && arguments['length'] != 0) $pyjs__exception_func_param(arguments['callee']['__name__'], 0, 0, arguments['length']);

			$pyjs['track']={'module':'game3','lineno':49};$pyjs['trackstack']['push']($pyjs['track']);
			$pyjs['track']['module']='game3';
			$pyjs['track']['lineno']=49;
			$pyjs['track']['lineno']=50;
			$pyjs['track']['lineno']=51;
			$m['pygame']['init']();
			$pyjs['track']['lineno']=52;
			$p['printFunc'](['in main'], 1);
			$pyjs['track']['lineno']=53;
			$m['FPSCLOCK'] = $m['pygame']['time']['Clock']();
			$pyjs['track']['lineno']=54;
			$m['DISPLAYSURF'] = $m['pygame']['display']['set_mode']($p['tuple']([$m['WINDOWWIDTH'], $m['WINDOWHEIGHT']]));
			$pyjs['track']['lineno']=55;
			$m['DISPLAYSURF']['fill']($p['tuple']([$constant_int_255, $constant_int_255, $constant_int_255]));
			$pyjs['track']['lineno']=56;
			$m['BASICFONT'] = $m['pygame']['font']['Font']('freesansbold.ttf', $constant_int_18);
			$pyjs['track']['lineno']=57;
			$m['BIGFONT'] = $m['pygame']['font']['Font']('freesansbold.ttf', $constant_int_100);
			$pyjs['track']['lineno']=58;
			$m['pygame']['display']['set_caption']('Cotton Candy');
			$pyjs['track']['lineno']=59;
			$m['initBoardArr']();
			$pyjs['track']['lineno']=60;
			(typeof renderScreen == "undefined"?$m['renderScreen']:renderScreen)();
			$pyjs['track']['lineno']=61;
			while ($p['bool'](true)) {
				$pyjs['track']['lineno']=62;
				(typeof runGame == "undefined"?$m['runGame']:runGame)();
				$pyjs['track']['lineno']=63;
				(typeof showTextScreen == "undefined"?$m['showTextScreen']:showTextScreen)('Game Over');
			}
			$pyjs['trackstack']['pop']();$pyjs['track']=$pyjs['trackstack']['pop']();$pyjs['trackstack']['push']($pyjs['track']);
			return null;
		};
		$m['main']['__name__'] = 'main';

		$m['main']['__bind_type__'] = 0;
		$m['main']['__args__'] = [null,null];
		$pyjs['track']['lineno']=64;
		$m['runGame'] = function() {
			if ($pyjs['options']['arg_count'] && arguments['length'] != 0) $pyjs__exception_func_param(arguments['callee']['__name__'], 0, 0, arguments['length']);
			var $or5,$or4,$iter2_nextval,$iter2_type,$or3,$iter2_iter,$or2,$pyjs__trackstack_size_1,$or7,$or8,$iter2_idx,$or6,$or1,event,$iter2_array;
			$pyjs['track']={'module':'game3','lineno':64};$pyjs['trackstack']['push']($pyjs['track']);
			$pyjs['track']['module']='game3';
			$pyjs['track']['lineno']=64;
			$pyjs['track']['lineno']=65;
			$pyjs['track']['lineno']=66;
			while ($p['bool'](true)) {
				$pyjs['track']['lineno']=67;
				(typeof collapse == "undefined"?$m['collapse']:collapse)();
				$pyjs['track']['lineno']=68;
				$pyjs__trackstack_size_1=$pyjs['trackstack']['length'];
				$iter2_iter = $m['pygame']['event']['get']();
				$iter2_nextval=$p['__iter_prepare']($iter2_iter,false);
				while (typeof($p['__wrapped_next']($iter2_nextval)['$nextval']) != 'undefined') {
					event = $iter2_nextval['$nextval'];
					$pyjs['track']['lineno']=69;
					if ($p['bool']($p['op_eq']($p['getattr'](event, 'type'), (typeof KEYDOWN == "undefined"?$m['KEYDOWN']:KEYDOWN)))) {
						$pyjs['track']['lineno']=70;
						if ($p['bool'](($p['bool']($or1=$p['op_eq']($p['getattr'](event, 'key'), (typeof K_LEFT == "undefined"?$m['K_LEFT']:K_LEFT)))?$or1:$p['op_eq']($p['getattr'](event, 'key'), (typeof K_a == "undefined"?$m['K_a']:K_a))))) {
							$pyjs['track']['lineno']=71;
							$p['printFunc'](['left pressed'], 1);
							$pyjs['track']['lineno']=72;
							if ($p['bool']($p['op_eq']($m['direction'], 'left'))) {
								$pyjs['track']['lineno']=73;
								(typeof move == "undefined"?$m['move']:move)($m['direction']);
							}
							$pyjs['track']['lineno']=74;
							$m['direction'] = 'left';
						}
						else if ($p['bool'](($p['bool']($or3=$p['op_eq']($p['getattr'](event, 'key'), (typeof K_RIGHT == "undefined"?$m['K_RIGHT']:K_RIGHT)))?$or3:$p['op_eq']($p['getattr'](event, 'key'), (typeof K_d == "undefined"?$m['K_d']:K_d))))) {
							$pyjs['track']['lineno']=76;
							$p['printFunc'](['right pressed'], 1);
							$pyjs['track']['lineno']=77;
							if ($p['bool']($p['op_eq']($m['direction'], 'right'))) {
								$pyjs['track']['lineno']=78;
								(typeof move == "undefined"?$m['move']:move)($m['direction']);
							}
							$pyjs['track']['lineno']=79;
							$m['direction'] = 'right';
						}
						else if ($p['bool'](($p['bool']($or5=$p['op_eq']($p['getattr'](event, 'key'), (typeof K_UP == "undefined"?$m['K_UP']:K_UP)))?$or5:$p['op_eq']($p['getattr'](event, 'key'), (typeof K_w == "undefined"?$m['K_w']:K_w))))) {
							$pyjs['track']['lineno']=81;
							$p['printFunc'](['up pressed'], 1);
							$pyjs['track']['lineno']=82;
							$p['op_eq']($m['direction'], 'up');
						}
						else if ($p['bool'](($p['bool']($or7=$p['op_eq']($p['getattr'](event, 'key'), (typeof K_DOWN == "undefined"?$m['K_DOWN']:K_DOWN)))?$or7:$p['op_eq']($p['getattr'](event, 'key'), (typeof K_s == "undefined"?$m['K_s']:K_s))))) {
							$pyjs['track']['lineno']=84;
							$p['printFunc'](['down pressed'], 1);
							$pyjs['track']['lineno']=85;
							if ($p['bool']($p['op_eq']($m['direction'], 'down'))) {
								$pyjs['track']['lineno']=86;
								(typeof move == "undefined"?$m['move']:move)($m['direction']);
							}
							$pyjs['track']['lineno']=87;
							$m['direction'] = 'down';
						}
						else if ($p['bool']($p['op_eq']($p['getattr'](event, 'key'), (typeof K_SPACE == "undefined"?$m['K_SPACE']:K_SPACE)))) {
							$pyjs['track']['lineno']=89;
							$p['printFunc'](['eating direction is ', $m['direction']], 1);
							$pyjs['track']['lineno']=90;
							(typeof eat == "undefined"?$m['eat']:eat)($m['direction']);
						}
						$pyjs['track']['lineno']=91;
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
		$pyjs['track']['lineno']=92;
		$m['canEat'] = function(goal) {
			if ($pyjs['options']['arg_count'] && arguments['length'] != 1) $pyjs__exception_func_param(arguments['callee']['__name__'], 1, 1, arguments['length']);
			var $or9,$or11,$or10,col,row;
			$pyjs['track']={'module':'game3','lineno':92};$pyjs['trackstack']['push']($pyjs['track']);
			$pyjs['track']['module']='game3';
			$pyjs['track']['lineno']=92;
			$pyjs['track']['lineno']=93;
			$pyjs['track']['lineno']=94;
			if ($p['bool'](($p['bool']($or9=($p['cmp'](goal['__getitem__']($constant_int_0), $constant_int_0) == -1))?$or9:($p['bool']($or10=($p['cmp'](goal['__getitem__']($constant_int_1), $constant_int_0) == -1))?$or10:((($p['cmp'](goal['__getitem__']($constant_int_1), $constant_int_10))|1) == 1))))) {
				$pyjs['track']['lineno']=95;
				$p['printFunc'](['cant eat because off screen'], 1);
				$pyjs['track']['lineno']=96;
				$pyjs['track']['lineno']=96;
				var $pyjs__ret = false;
				$pyjs['trackstack']['pop']();$pyjs['track']=$pyjs['trackstack']['pop']();$pyjs['trackstack']['push']($pyjs['track']);
				return $pyjs__ret;
			}
			$pyjs['track']['lineno']=97;
			row = goal['__getitem__']($constant_int_0);
			$pyjs['track']['lineno']=98;
			col = goal['__getitem__']($constant_int_1);
			$pyjs['track']['lineno']=99;
			if ($p['bool']($p['op_eq']($m['boardArr']['__getitem__'](row)['__getitem__'](col), $constant_int_0))) {
				$pyjs['track']['lineno']=100;
				$p['printFunc'](['cant eat because empty there: ', $m['direction']], 1);
				$pyjs['track']['lineno']=101;
				$pyjs['track']['lineno']=101;
				var $pyjs__ret = false;
				$pyjs['trackstack']['pop']();$pyjs['track']=$pyjs['trackstack']['pop']();$pyjs['trackstack']['push']($pyjs['track']);
				return $pyjs__ret;
			}
			else {
				$pyjs['track']['lineno']=103;
				$pyjs['track']['lineno']=103;
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
		$pyjs['track']['lineno']=106;
		$m['eat'] = function(direction) {
			if ($pyjs['options']['arg_count'] && arguments['length'] != 1) $pyjs__exception_func_param(arguments['callee']['__name__'], 1, 1, arguments['length']);
			var goal,row,$add5,$sub2,$add3,$add6,$add4,$sub3,$sub1,$sub4,col;
			$pyjs['track']={'module':'game3','lineno':106};$pyjs['trackstack']['push']($pyjs['track']);
			$pyjs['track']['module']='game3';
			$pyjs['track']['lineno']=106;
			$pyjs['track']['lineno']=107;
			$pyjs['track']['lineno']=108;
			goal = $p['tuple']([$constant_int_0, $constant_int_0]);
			$pyjs['track']['lineno']=109;
			if ($p['bool']($p['op_eq'](direction, 'right'))) {
				$pyjs['track']['lineno']=110;
				goal = $p['tuple']([$m['posY'], $p['__op_add']($add3=$m['posX'],$add4=$constant_int_1)]);
			}
			else if ($p['bool']($p['op_eq'](direction, 'left'))) {
				$pyjs['track']['lineno']=112;
				goal = $p['tuple']([$m['posY'], $p['__op_sub']($sub1=$m['posX'],$sub2=$constant_int_1)]);
			}
			else if ($p['bool']($p['op_eq'](direction, 'down'))) {
				$pyjs['track']['lineno']=114;
				goal = $p['tuple']([$p['__op_add']($add5=$m['posY'],$add6=$constant_int_1), $m['posX']]);
			}
			$pyjs['track']['lineno']=117;
			if ($p['bool']($m['canEat'](goal))) {
				$pyjs['track']['lineno']=118;
				$m['stomachSpace'] = $p['__op_sub']($sub3=$m['stomachSpace'],$sub4=$constant_int_1);
				$pyjs['track']['lineno']=119;
				row = goal['__getitem__']($constant_int_0);
				$pyjs['track']['lineno']=120;
				col = goal['__getitem__']($constant_int_1);
				$pyjs['track']['lineno']=121;
				(typeof getEatGroup == "undefined"?$m['getEatGroup']:getEatGroup)(goal, $m['boardArr']['__getitem__'](row)['__getitem__'](col));
			}
			$pyjs['track']['lineno']=124;
			(typeof collapse == "undefined"?$m['collapse']:collapse)();
			$pyjs['track']['lineno']=125;
			(typeof renderScreen == "undefined"?$m['renderScreen']:renderScreen)();
			$pyjs['trackstack']['pop']();$pyjs['track']=$pyjs['trackstack']['pop']();$pyjs['trackstack']['push']($pyjs['track']);
			return null;
		};
		$m['eat']['__name__'] = 'eat';

		$m['eat']['__bind_type__'] = 0;
		$m['eat']['__args__'] = [null,null,['direction']];
		$pyjs['track']['lineno']=127;
		$m['getEatGroup'] = function(goal, tileType) {
			if ($pyjs['options']['arg_count'] && arguments['length'] != 2) $pyjs__exception_func_param(arguments['callee']['__name__'], 2, 2, arguments['length']);
			var $sub16,row,$sub9,$sub8,$sub12,$sub7,$sub6,$sub5,$sub10,$sub13,$and1,$and2,$and3,$and4,$and5,$and6,$sub14,$add14,$add15,$add16,$add17,$add10,$add11,$add12,$add13,$add18,$sub15,$add7,$sub11,$add8,$add9,col;
			$pyjs['track']={'module':'game3','lineno':127};$pyjs['trackstack']['push']($pyjs['track']);
			$pyjs['track']['module']='game3';
			$pyjs['track']['lineno']=127;
			$pyjs['track']['lineno']=128;
			$pyjs['track']['lineno']=129;
			row = goal['__getitem__']($constant_int_0);
			$pyjs['track']['lineno']=130;
			col = goal['__getitem__']($constant_int_1);
			$pyjs['track']['lineno']=131;
			$p['printFunc'](['tile type is: ', $m['boardArr']['__getitem__'](row)['__getitem__'](col)], 1);
			$pyjs['track']['lineno']=133;
			$m['boardArr']['__getitem__'](row)['__setitem__'](col, $constant_int_0);
			$pyjs['track']['lineno']=134;
			$m['score'] = $p['__op_add']($add7=$m['score'],$add8=$constant_int_1);
			$pyjs['track']['lineno']=135;
			if ($p['bool'](($p['bool']($and1=($p['cmp']($p['__op_add']($add9=col,$add10=$constant_int_1), $constant_int_10) == -1))?$p['op_eq']($m['boardArr']['__getitem__'](row)['__getitem__']($p['__op_add']($add11=col,$add12=$constant_int_1)), tileType):$and1))) {
				$pyjs['track']['lineno']=136;
				$m['getEatGroup']($p['tuple']([row, $p['__op_add']($add13=col,$add14=$constant_int_1)]), tileType);
			}
			$pyjs['track']['lineno']=137;
			if ($p['bool'](($p['bool']($and3=((($p['cmp']($p['__op_sub']($sub5=col,$sub6=$constant_int_1), $constant_int_0))|1) == 1))?$p['op_eq']($m['boardArr']['__getitem__'](row)['__getitem__']($p['__op_sub']($sub7=col,$sub8=$constant_int_1)), tileType):$and3))) {
				$pyjs['track']['lineno']=138;
				$m['getEatGroup']($p['tuple']([row, $p['__op_sub']($sub9=col,$sub10=$constant_int_1)]), tileType);
			}
			$pyjs['track']['lineno']=139;
			if ($p['bool']($p['op_eq']($m['boardArr']['__getitem__']($p['__op_add']($add15=row,$add16=$constant_int_1))['__getitem__'](col), tileType))) {
				$pyjs['track']['lineno']=140;
				$m['getEatGroup']($p['tuple']([$p['__op_add']($add17=row,$add18=$constant_int_1), col]), tileType);
			}
			$pyjs['track']['lineno']=141;
			if ($p['bool'](($p['bool']($and5=((($p['cmp']($p['__op_sub']($sub11=row,$sub12=$constant_int_1), $constant_int_0))|1) == 1))?$p['op_eq']($m['boardArr']['__getitem__']($p['__op_sub']($sub13=row,$sub14=$constant_int_1))['__getitem__'](col), tileType):$and5))) {
				$pyjs['track']['lineno']=142;
				$m['getEatGroup']($p['tuple']([$p['__op_sub']($sub15=row,$sub16=$constant_int_1), col]), tileType);
			}
			$pyjs['trackstack']['pop']();$pyjs['track']=$pyjs['trackstack']['pop']();$pyjs['trackstack']['push']($pyjs['track']);
			return null;
		};
		$m['getEatGroup']['__name__'] = 'getEatGroup';

		$m['getEatGroup']['__bind_type__'] = 0;
		$m['getEatGroup']['__args__'] = [null,null,['goal'],['tileType']];
		$pyjs['track']['lineno']=145;
		$m['collapsable'] = function(row, col, num) {
			if ($pyjs['options']['arg_count'] && arguments['length'] != 3) $pyjs__exception_func_param(arguments['callee']['__name__'], 3, 3, arguments['length']);
			var $sub22,$sub20,$sub21,$sub19,$add28,$add21,$add20,$add23,$add22,$add25,$add24,$add27,$add26,$and8,$and9,sameType,$sub18,$sub17,$and7,$and10,$add19,$or15,$or14,$or13,$or12;
			$pyjs['track']={'module':'game3','lineno':145};$pyjs['trackstack']['push']($pyjs['track']);
			$pyjs['track']['module']='game3';
			$pyjs['track']['lineno']=145;
			$pyjs['track']['lineno']=146;
			$pyjs['track']['lineno']=147;
			sameType = $m['boardArr']['__getitem__'](row)['__getitem__'](col);
			$pyjs['track']['lineno']=148;
			if ($p['bool']($p['op_eq'](sameType, $constant_int_0))) {
				$pyjs['track']['lineno']=149;
				$pyjs['track']['lineno']=149;
				var $pyjs__ret = false;
				$pyjs['trackstack']['pop']();$pyjs['track']=$pyjs['trackstack']['pop']();$pyjs['trackstack']['push']($pyjs['track']);
				return $pyjs__ret;
			}
			$pyjs['track']['lineno']=150;
			if ($p['bool'](($p['bool']($and7=($p['cmp']($p['__op_add']($add19=col,$add20=$constant_int_1), $constant_int_10) == -1))?($p['bool']($or12=$p['op_eq']($m['boardArr']['__getitem__'](row)['__getitem__']($p['__op_add']($add21=col,$add22=$constant_int_1)), sameType))?$or12:($p['cmp'](num, $constant_int_0) == 1)):$and7))) {
				$pyjs['track']['lineno']=151;
				if ($p['bool'](!$p['bool']($m['collapsable'](row, $p['__op_add']($add23=col,$add24=$constant_int_1), $p['__op_add']($add25=num,$add26=$constant_int_1))))) {
					$pyjs['track']['lineno']=152;
					$pyjs['track']['lineno']=152;
					var $pyjs__ret = false;
					$pyjs['trackstack']['pop']();$pyjs['track']=$pyjs['trackstack']['pop']();$pyjs['trackstack']['push']($pyjs['track']);
					return $pyjs__ret;
				}
			}
			$pyjs['track']['lineno']=153;
			if ($p['bool'](($p['bool']($and9=((($p['cmp']($p['__op_sub']($sub17=row,$sub18=$constant_int_1), $constant_int_0))|1) == 1))?($p['bool']($or14=$p['op_eq']($m['boardArr']['__getitem__']($p['__op_sub']($sub19=row,$sub20=$constant_int_1))['__getitem__'](col), sameType))?$or14:($p['cmp'](num, $constant_int_0) == 1)):$and9))) {
				$pyjs['track']['lineno']=154;
				if ($p['bool'](!$p['bool']($m['collapsable']($p['__op_sub']($sub21=row,$sub22=$constant_int_1), col, $p['__op_add']($add27=num,$add28=$constant_int_1))))) {
					$pyjs['track']['lineno']=155;
					$pyjs['track']['lineno']=155;
					var $pyjs__ret = false;
					$pyjs['trackstack']['pop']();$pyjs['track']=$pyjs['trackstack']['pop']();$pyjs['trackstack']['push']($pyjs['track']);
					return $pyjs__ret;
				}
			}
			$pyjs['track']['lineno']=156;
			$pyjs['track']['lineno']=156;
			var $pyjs__ret = true;
			$pyjs['trackstack']['pop']();$pyjs['track']=$pyjs['trackstack']['pop']();$pyjs['trackstack']['push']($pyjs['track']);
			return $pyjs__ret;
		};
		$m['collapsable']['__name__'] = 'collapsable';

		$m['collapsable']['__bind_type__'] = 0;
		$m['collapsable']['__args__'] = [null,null,['row'],['col'],['num']];
		$pyjs['track']['lineno']=158;
		$m['getCollapseGroup'] = function(row, col, tileType) {
			if ($pyjs['options']['arg_count'] && arguments['length'] != 3) $pyjs__exception_func_param(arguments['callee']['__name__'], 3, 3, arguments['length']);
			var $sub23,$sub26,$sub27,$sub24,$sub25,$sub28,$sub29,done,$and22,$and21,$and20,$add29,group,$add44,$add43,$add42,$add41,$add40,$sub31,$sub30,$sub33,$sub32,$sub35,$sub34,$sub37,$sub36,$sub38,$and12,$and13,$and11,$and16,$and17,$and14,$and15,$and18,$and19,$add38,$add39,$add32,$add33,$add30,$add31,$add36,$add37,$add34,$add35;
			$pyjs['track']={'module':'game3','lineno':158};$pyjs['trackstack']['push']($pyjs['track']);
			$pyjs['track']['module']='game3';
			$pyjs['track']['lineno']=158;
			$pyjs['track']['lineno']=159;
			$pyjs['track']['lineno']=160;
			group = $p['list']([]);
			$pyjs['track']['lineno']=161;
			done = $constant_int_0;
			$pyjs['track']['lineno']=162;
			if ($p['bool']($p['op_eq']($m['collapseGroupHolder']['__getitem__'](row)['__getitem__'](col), $constant_int_0))) {
				$pyjs['track']['lineno']=163;
				group['append']($p['tuple']([row, col]));
			}
			$pyjs['track']['lineno']=164;
			$m['collapseGroupHolder']['__getitem__'](row)['__setitem__'](col, $constant_int_1);
			$pyjs['track']['lineno']=165;
			if ($p['bool'](($p['bool']($and11=($p['cmp']($p['__op_add']($add29=col,$add30=$constant_int_1), $constant_int_10) == -1))?($p['bool']($and12=$p['op_eq']($m['boardArr']['__getitem__'](row)['__getitem__']($p['__op_add']($add31=col,$add32=$constant_int_1)), tileType))?$p['op_eq']($m['collapseGroupHolder']['__getitem__'](row)['__getitem__']($p['__op_add']($add33=col,$add34=$constant_int_1)), $constant_int_0):$and12):$and11))) {
				$pyjs['track']['lineno']=166;
				group['extend']($m['getCollapseGroup'](row, $p['__op_add']($add35=col,$add36=$constant_int_1), tileType));
			}
			$pyjs['track']['lineno']=167;
			if ($p['bool'](($p['bool']($and14=((($p['cmp']($p['__op_sub']($sub23=col,$sub24=$constant_int_1), $constant_int_0))|1) == 1))?($p['bool']($and15=$p['op_eq']($m['boardArr']['__getitem__'](row)['__getitem__']($p['__op_sub']($sub25=col,$sub26=$constant_int_1)), tileType))?$p['op_eq']($m['collapseGroupHolder']['__getitem__'](row)['__getitem__']($p['__op_sub']($sub27=col,$sub28=$constant_int_1)), $constant_int_0):$and15):$and14))) {
				$pyjs['track']['lineno']=168;
				group['extend']($m['getCollapseGroup'](row, $p['__op_sub']($sub29=col,$sub30=$constant_int_1), tileType));
			}
			$pyjs['track']['lineno']=169;
			if ($p['bool'](($p['bool']($and17=($p['cmp']($p['__op_add']($add37=row,$add38=$constant_int_1), $m['boardArrHeight']) == -1))?($p['bool']($and18=$p['op_eq']($m['boardArr']['__getitem__']($p['__op_add']($add39=row,$add40=$constant_int_1))['__getitem__'](col), tileType))?$p['op_eq']($m['collapseGroupHolder']['__getitem__']($p['__op_add']($add41=row,$add42=$constant_int_1))['__getitem__'](col), $constant_int_0):$and18):$and17))) {
				$pyjs['track']['lineno']=170;
				group['extend']($m['getCollapseGroup']($p['__op_add']($add43=row,$add44=$constant_int_1), col, tileType));
			}
			$pyjs['track']['lineno']=171;
			if ($p['bool'](($p['bool']($and20=((($p['cmp']($p['__op_sub']($sub31=row,$sub32=$constant_int_1), $constant_int_0))|1) == 1))?($p['bool']($and21=$p['op_eq']($m['boardArr']['__getitem__']($p['__op_sub']($sub33=row,$sub34=$constant_int_1))['__getitem__'](col), tileType))?$p['op_eq']($m['collapseGroupHolder']['__getitem__']($p['__op_sub']($sub35=row,$sub36=$constant_int_1))['__getitem__'](col), $constant_int_0):$and21):$and20))) {
				$pyjs['track']['lineno']=172;
				group['extend']($m['getCollapseGroup']($p['__op_sub']($sub37=row,$sub38=$constant_int_1), col, tileType));
			}
			$pyjs['track']['lineno']=175;
			$pyjs['track']['lineno']=175;
			var $pyjs__ret = group;
			$pyjs['trackstack']['pop']();$pyjs['track']=$pyjs['trackstack']['pop']();$pyjs['trackstack']['push']($pyjs['track']);
			return $pyjs__ret;
		};
		$m['getCollapseGroup']['__name__'] = 'getCollapseGroup';

		$m['getCollapseGroup']['__bind_type__'] = 0;
		$m['getCollapseGroup']['__args__'] = [null,null,['row'],['col'],['tileType']];
		$pyjs['track']['lineno']=177;
		$m['canCollapse'] = function(group) {
			if ($pyjs['options']['arg_count'] && arguments['length'] != 1) $pyjs__exception_func_param(arguments['callee']['__name__'], 1, 1, arguments['length']);
			var $add50,$iter3_idx,$add49,$add48,i,$add46,$iter3_nextval,$iter3_array,$add47,can,$iter3_type,$and23,$and24,$pyjs__trackstack_size_1,$add45,$and25,$iter3_iter;
			$pyjs['track']={'module':'game3','lineno':177};$pyjs['trackstack']['push']($pyjs['track']);
			$pyjs['track']['module']='game3';
			$pyjs['track']['lineno']=177;
			$pyjs['track']['lineno']=178;
			$pyjs['track']['lineno']=179;
			can = true;
			$pyjs['track']['lineno']=180;
			$pyjs__trackstack_size_1=$pyjs['trackstack']['length'];
			$iter3_iter = group;
			$iter3_nextval=$p['__iter_prepare']($iter3_iter,false);
			while (typeof($p['__wrapped_next']($iter3_nextval)['$nextval']) != 'undefined') {
				i = $iter3_nextval['$nextval'];
				$pyjs['track']['lineno']=181;
				if ($p['bool'](($p['bool']($and23=!group['__contains__']($p['tuple']([$p['__op_add']($add45=i['__getitem__']($constant_int_0),$add46=$constant_int_1), i['__getitem__']($constant_int_1)])))?($p['bool']($and24=($p['cmp']($p['__op_add']($add47=i['__getitem__']($constant_int_0),$add48=$constant_int_1), $m['boardArrHeight']) == -1))?!$p['op_eq']($m['boardArr']['__getitem__']($p['__op_add']($add49=i['__getitem__']($constant_int_0),$add50=$constant_int_1))['__getitem__'](i['__getitem__']($constant_int_1)), $constant_int_0):$and24):$and23))) {
					$pyjs['track']['lineno']=182;
					can = false;
				}
			}
			if ($pyjs['trackstack']['length'] > $pyjs__trackstack_size_1) {
				$pyjs['trackstack'] = $pyjs['trackstack']['slice'](0,$pyjs__trackstack_size_1);
				$pyjs['track'] = $pyjs['trackstack']['slice'](-1)[0];
			}
			$pyjs['track']['module']='game3';
			$pyjs['track']['lineno']=185;
			$pyjs['track']['lineno']=185;
			var $pyjs__ret = can;
			$pyjs['trackstack']['pop']();$pyjs['track']=$pyjs['trackstack']['pop']();$pyjs['trackstack']['push']($pyjs['track']);
			return $pyjs__ret;
		};
		$m['canCollapse']['__name__'] = 'canCollapse';

		$m['canCollapse']['__bind_type__'] = 0;
		$m['canCollapse']['__args__'] = [null,null,['group']];
		$pyjs['track']['lineno']=187;
		$m['collapseGroup'] = function(group) {
			if ($pyjs['options']['arg_count'] && arguments['length'] != 1) $pyjs__exception_func_param(arguments['callee']['__name__'], 1, 1, arguments['length']);
			var $add51,$add52,$add53,i,$iter4_nextval,$iter4_idx,$add54,$iter4_type,$pyjs__trackstack_size_1,$iter4_array,$iter4_iter;
			$pyjs['track']={'module':'game3','lineno':187};$pyjs['trackstack']['push']($pyjs['track']);
			$pyjs['track']['module']='game3';
			$pyjs['track']['lineno']=187;
			$pyjs['track']['lineno']=188;
			$pyjs['track']['lineno']=189;
			$pyjs__trackstack_size_1=$pyjs['trackstack']['length'];
			$iter4_iter = group;
			$iter4_nextval=$p['__iter_prepare']($iter4_iter,false);
			while (typeof($p['__wrapped_next']($iter4_nextval)['$nextval']) != 'undefined') {
				i = $iter4_nextval['$nextval'];
				$pyjs['track']['lineno']=190;
				if ($p['bool'](($p['cmp']($p['__op_add']($add51=i['__getitem__']($constant_int_0),$add52=$constant_int_1), $m['boardArrHeight']) == -1))) {
					$pyjs['track']['lineno']=191;
					$m['boardArr']['__getitem__']($p['__op_add']($add53=i['__getitem__']($constant_int_0),$add54=$constant_int_1))['__setitem__'](i['__getitem__']($constant_int_1), $m['boardArr']['__getitem__'](i['__getitem__']($constant_int_0))['__getitem__'](i['__getitem__']($constant_int_1)));
					$pyjs['track']['lineno']=192;
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
		$pyjs['track']['lineno']=194;
		$m['collapse'] = function() {
			if ($pyjs['options']['arg_count'] && arguments['length'] != 0) $pyjs__exception_func_param(arguments['callee']['__name__'], 0, 0, arguments['length']);
			var $iter5_nextval,$mul11,$iter6_type,$iter5_idx,$iter5_iter,$sub41,$sub40,$iter5_type,$iter6_iter,$sub42,startPos,$iter6_nextval,group,$iter5_array,$iter6_idx,$sub39,$iter6_array,$mul9,$mul8,$mul7,$mul6,$mul5,$mul12,$add55,$add56,$mul10,i,j,$pyjs__trackstack_size_2,$pyjs__trackstack_size_1;
			$pyjs['track']={'module':'game3','lineno':194};$pyjs['trackstack']['push']($pyjs['track']);
			$pyjs['track']['module']='game3';
			$pyjs['track']['lineno']=194;
			$pyjs['track']['lineno']=195;
			$pyjs['track']['lineno']=196;
			$pyjs__trackstack_size_1=$pyjs['trackstack']['length'];
			$iter5_iter = $p['xrange']($constant_int_0, $p['__op_sub']($sub39=$m['boardArrHeight'],$sub40=$constant_int_1));
			$iter5_nextval=$p['__iter_prepare']($iter5_iter,false);
			while (typeof($p['__wrapped_next']($iter5_nextval)['$nextval']) != 'undefined') {
				i = $iter5_nextval['$nextval'];
				$pyjs['track']['lineno']=197;
				$pyjs__trackstack_size_2=$pyjs['trackstack']['length'];
				$iter6_iter = $p['xrange']($constant_int_0, $constant_int_10);
				$iter6_nextval=$p['__iter_prepare']($iter6_iter,false);
				while (typeof($p['__wrapped_next']($iter6_nextval)['$nextval']) != 'undefined') {
					j = $iter6_nextval['$nextval'];
					$pyjs['track']['lineno']=198;
					startPos = $p['__op_sub']($sub41=$constant_int_300,$sub42=(typeof ($mul5=$m['posY'])==typeof ($mul6=$constant_int_50) && typeof $mul5=='number'?
						$mul5*$mul6:
						$p['op_mul']($mul5,$mul6)));
					$pyjs['track']['lineno']=199;
					if ($p['bool'](($p['cmp']($p['__op_add']($add55=startPos,$add56=(typeof ($mul7=i)==typeof ($mul8=$constant_int_50) && typeof $mul7=='number'?
						$mul7*$mul8:
						$p['op_mul']($mul7,$mul8))), $constant_int_1000) == 1))) {
						$pyjs['track']['lineno']=200;
						break;
					}
					$pyjs['track']['lineno']=201;
					$m['collapseGroupHolder'] = (typeof ($mul11=$p['list']([(typeof ($mul9=$p['list']([$constant_int_0]))==typeof ($mul10=$constant_int_10) && typeof $mul9=='number'?
						$mul9*$mul10:
						$p['op_mul']($mul9,$mul10))]))==typeof ($mul12=$m['boardArrHeight']) && typeof $mul11=='number'?
						$mul11*$mul12:
						$p['op_mul']($mul11,$mul12));
					$pyjs['track']['lineno']=202;
					group = $m['getCollapseGroup'](i, j, $m['boardArr']['__getitem__'](i)['__getitem__'](j));
					$pyjs['track']['lineno']=203;
					if ($p['bool']($m['canCollapse'](group))) {
						$pyjs['track']['lineno']=204;
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
			$pyjs['track']['lineno']=207;
			(typeof collapseCharacter == "undefined"?$m['collapseCharacter']:collapseCharacter)();
			$pyjs['trackstack']['pop']();$pyjs['track']=$pyjs['trackstack']['pop']();$pyjs['trackstack']['push']($pyjs['track']);
			return null;
		};
		$m['collapse']['__name__'] = 'collapse';

		$m['collapse']['__bind_type__'] = 0;
		$m['collapse']['__args__'] = [null,null];
		$pyjs['track']['lineno']=209;
		$m['collapseCharacter'] = function() {
			if ($pyjs['options']['arg_count'] && arguments['length'] != 0) $pyjs__exception_func_param(arguments['callee']['__name__'], 0, 0, arguments['length']);
			var $add60,$add57,$add58,$add59;
			$pyjs['track']={'module':'game3','lineno':209};$pyjs['trackstack']['push']($pyjs['track']);
			$pyjs['track']['module']='game3';
			$pyjs['track']['lineno']=209;
			$pyjs['track']['lineno']=210;
			$pyjs['track']['lineno']=211;
			while ($p['bool']($p['op_eq']($m['boardArr']['__getitem__']($p['__op_add']($add57=$m['posY'],$add58=$constant_int_1))['__getitem__']($m['posX']), $constant_int_0))) {
				$pyjs['track']['lineno']=212;
				$m['posY'] = $p['__op_add']($add59=$m['posY'],$add60=$constant_int_1);
			}
			$pyjs['trackstack']['pop']();$pyjs['track']=$pyjs['trackstack']['pop']();$pyjs['trackstack']['push']($pyjs['track']);
			return null;
		};
		$m['collapseCharacter']['__name__'] = 'collapseCharacter';

		$m['collapseCharacter']['__bind_type__'] = 0;
		$m['collapseCharacter']['__args__'] = [null,null];
		$pyjs['track']['lineno']=214;
		$m['canMove'] = function(goal) {
			if ($pyjs['options']['arg_count'] && arguments['length'] != 1) $pyjs__exception_func_param(arguments['callee']['__name__'], 1, 1, arguments['length']);
			var $or17,$or16,$or18;
			$pyjs['track']={'module':'game3','lineno':214};$pyjs['trackstack']['push']($pyjs['track']);
			$pyjs['track']['module']='game3';
			$pyjs['track']['lineno']=214;
			$pyjs['track']['lineno']=215;
			if ($p['bool'](($p['bool']($or16=($p['cmp'](goal['__getitem__']($constant_int_0), $constant_int_0) == -1))?$or16:($p['bool']($or17=($p['cmp'](goal['__getitem__']($constant_int_1), $constant_int_0) == -1))?$or17:((($p['cmp'](goal['__getitem__']($constant_int_1), $constant_int_10))|1) == 1))))) {
				$pyjs['track']['lineno']=216;
				$p['printFunc'](['cant move because off screen y: ', goal['__getitem__']($constant_int_0), ' x: ', goal['__getitem__']($constant_int_1)], 1);
				$pyjs['track']['lineno']=217;
				$pyjs['track']['lineno']=217;
				var $pyjs__ret = false;
				$pyjs['trackstack']['pop']();$pyjs['track']=$pyjs['trackstack']['pop']();$pyjs['trackstack']['push']($pyjs['track']);
				return $pyjs__ret;
			}
			$pyjs['track']['lineno']=218;
			$pyjs['track']['lineno']=218;
			var $pyjs__ret = !$p['bool']($m['canEat'](goal));
			$pyjs['trackstack']['pop']();$pyjs['track']=$pyjs['trackstack']['pop']();$pyjs['trackstack']['push']($pyjs['track']);
			return $pyjs__ret;
		};
		$m['canMove']['__name__'] = 'canMove';

		$m['canMove']['__bind_type__'] = 0;
		$m['canMove']['__args__'] = [null,null,['goal']];
		$pyjs['track']['lineno']=220;
		$m['move'] = function(direction) {
			if ($pyjs['options']['arg_count'] && arguments['length'] != 1) $pyjs__exception_func_param(arguments['callee']['__name__'], 1, 1, arguments['length']);
			var $sub48,$sub49,$sub43,$sub44,$sub45,$sub46,$sub47,$add65,$add64,$add67,$add66,$add61,goal,$add63,$add62,$add69,$add68,$sub54,$sub53,$sub52,$sub51,$sub50,$add76,$add74,$add75,$add72,$add73,$add70,$add71;
			$pyjs['track']={'module':'game3','lineno':220};$pyjs['trackstack']['push']($pyjs['track']);
			$pyjs['track']['module']='game3';
			$pyjs['track']['lineno']=220;
			$pyjs['track']['lineno']=221;
			$pyjs['track']['lineno']=222;
			goal = $p['tuple']([$constant_int_0, $constant_int_0]);
			$pyjs['track']['lineno']=223;
			if ($p['bool']($p['op_eq'](direction, 'right'))) {
				$pyjs['track']['lineno']=224;
				goal = $p['tuple']([$m['posY'], $p['__op_add']($add61=$m['posX'],$add62=$constant_int_1)]);
			}
			else if ($p['bool']($p['op_eq'](direction, 'left'))) {
				$pyjs['track']['lineno']=226;
				goal = $p['tuple']([$m['posY'], $p['__op_sub']($sub43=$m['posX'],$sub44=$constant_int_1)]);
			}
			else if ($p['bool']($p['op_eq'](direction, 'down'))) {
				$pyjs['track']['lineno']=228;
				goal = $p['tuple']([$p['__op_add']($add63=$m['posY'],$add64=$constant_int_1), $m['posX']]);
			}
			$pyjs['track']['lineno']=229;
			if ($p['bool']($m['canMove'](goal))) {
				$pyjs['track']['lineno']=230;
				if ($p['bool']($p['op_eq'](direction, 'right'))) {
					$pyjs['track']['lineno']=231;
					$m['posX'] = $p['__op_add']($add65=$m['posX'],$add66=$constant_int_1);
				}
				else if ($p['bool']($p['op_eq'](direction, 'left'))) {
					$pyjs['track']['lineno']=233;
					$m['posX'] = $p['__op_sub']($sub45=$m['posX'],$sub46=$constant_int_1);
				}
				else if ($p['bool']($p['op_eq'](direction, 'down'))) {
					$pyjs['track']['lineno']=235;
					$m['posY'] = $p['__op_add']($add67=$m['posY'],$add68=$constant_int_1);
				}
			}
			else if ($p['bool']($m['canMove']($p['tuple']([$p['__op_sub']($sub47=goal['__getitem__']($constant_int_0),$sub48=$constant_int_1), goal['__getitem__']($constant_int_1)])))) {
				$pyjs['track']['lineno']=237;
				if ($p['bool']($p['op_eq'](direction, 'right'))) {
					$pyjs['track']['lineno']=238;
					$m['posX'] = $p['__op_add']($add69=$m['posX'],$add70=$constant_int_1);
				}
				else if ($p['bool']($p['op_eq'](direction, 'left'))) {
					$pyjs['track']['lineno']=240;
					$m['posX'] = $p['__op_sub']($sub49=$m['posX'],$sub50=$constant_int_1);
				}
				$pyjs['track']['lineno']=241;
				$m['posY'] = $p['__op_sub']($sub51=$m['posY'],$sub52=$constant_int_1);
			}
			else if ($p['bool']($m['canMove']($p['tuple']([$p['__op_add']($add71=goal['__getitem__']($constant_int_0),$add72=$constant_int_1), goal['__getitem__']($constant_int_1)])))) {
				$pyjs['track']['lineno']=243;
				if ($p['bool']($p['op_eq'](direction, 'right'))) {
					$pyjs['track']['lineno']=244;
					$m['posX'] = $p['__op_add']($add73=$m['posX'],$add74=$constant_int_1);
				}
				else if ($p['bool']($p['op_eq'](direction, 'left'))) {
					$pyjs['track']['lineno']=246;
					$m['posX'] = $p['__op_sub']($sub53=$m['posX'],$sub54=$constant_int_1);
				}
				$pyjs['track']['lineno']=247;
				$m['posY'] = $p['__op_add']($add75=$m['posY'],$add76=$constant_int_1);
			}
			$pyjs['track']['lineno']=249;
			$m['collapse']();
			$pyjs['track']['lineno']=250;
			(typeof renderScreen == "undefined"?$m['renderScreen']:renderScreen)();
			$pyjs['trackstack']['pop']();$pyjs['track']=$pyjs['trackstack']['pop']();$pyjs['trackstack']['push']($pyjs['track']);
			return null;
		};
		$m['move']['__name__'] = 'move';

		$m['move']['__bind_type__'] = 0;
		$m['move']['__args__'] = [null,null,['direction']];
		$pyjs['track']['lineno']=252;
		$m['renderScoreAndStomach'] = function() {
			if ($pyjs['options']['arg_count'] && arguments['length'] != 0) $pyjs__exception_func_param(arguments['callee']['__name__'], 0, 0, arguments['length']);
			var $div1,text,textpos,$div2,scoreText,font;
			$pyjs['track']={'module':'game3','lineno':252};$pyjs['trackstack']['push']($pyjs['track']);
			$pyjs['track']['module']='game3';
			$pyjs['track']['lineno']=252;
			$pyjs['track']['lineno']=253;
			if ($p['bool']($p['getattr']($m['pygame'], 'font'))) {
				$pyjs['track']['lineno']=254;
				font = $m['pygame']['font']['Font'](null, $constant_int_36);
				$pyjs['track']['lineno']=255;
				scoreText = $p['sprintf']('Score: %d    Belly Space: %d', $p['tuple']([$m['score'], $m['stomachSpace']]));
				$pyjs['track']['lineno']=256;
				text = font['render'](scoreText, $constant_int_1, $p['tuple']([$constant_int_0, $constant_int_0, $constant_int_0]));
				$pyjs['track']['lineno']=257;
				textpos = $pyjs_kwargs_call(text, 'get_rect', null, null, [{'centerx':(typeof ($div1=$m['DISPLAYSURF']['get_width']())==typeof ($div2=$constant_int_2) && typeof $div1=='number' && $div2 !== 0?
					$div1/$div2:
					$p['op_div']($div1,$div2))}]);
				$pyjs['track']['lineno']=258;
				$m['DISPLAYSURF']['blit'](text, textpos);
			}
			else {
				$pyjs['track']['lineno']=260;
				$p['printFunc'](['fonts disabled'], 1);
			}
			$pyjs['trackstack']['pop']();$pyjs['track']=$pyjs['trackstack']['pop']();$pyjs['trackstack']['push']($pyjs['track']);
			return null;
		};
		$m['renderScoreAndStomach']['__name__'] = 'renderScoreAndStomach';

		$m['renderScoreAndStomach']['__bind_type__'] = 0;
		$m['renderScoreAndStomach']['__args__'] = [null,null];
		$pyjs['track']['lineno']=261;
		$m['renderCharacter'] = function() {
			if ($pyjs['options']['arg_count'] && arguments['length'] != 0) $pyjs__exception_func_param(arguments['callee']['__name__'], 0, 0, arguments['length']);
			var $add89,$add88,$add83,$add82,$add81,$add80,$add87,$add86,$add85,$add84,$mul19,$add79,$mul28,$mul29,$mul26,$mul27,$mul24,$mul25,$mul22,$mul23,$mul20,$mul21,$add101,$add100,$add102,$add98,$add99,$add77,$add94,$add95,$add96,$add97,$add90,$add91,$add92,$add93,$mul34,$mul17,$mul16,$mul15,$mul14,$mul13,vertices,$add78,$mul18,$mul35,$mul36,$mul31,$mul30,$mul33,$mul32;
			$pyjs['track']={'module':'game3','lineno':261};$pyjs['trackstack']['push']($pyjs['track']);
			$pyjs['track']['module']='game3';
			$pyjs['track']['lineno']=261;
			$pyjs['track']['lineno']=262;
			$pyjs['track']['lineno']=265;
			vertices = $p['list']([$p['tuple']([(typeof ($mul13=$m['posX'])==typeof ($mul14=$constant_int_50) && typeof $mul13=='number'?
				$mul13*$mul14:
				$p['op_mul']($mul13,$mul14)), $constant_int_300]), $p['tuple']([$p['__op_add']($add77=(typeof ($mul15=$m['posX'])==typeof ($mul16=$constant_int_50) && typeof $mul15=='number'?
				$mul15*$mul16:
				$p['op_mul']($mul15,$mul16)),$add78=$constant_int_50), $constant_int_300]), $p['tuple']([$p['__op_add']($add79=(typeof ($mul17=$m['posX'])==typeof ($mul18=$constant_int_50) && typeof $mul17=='number'?
				$mul17*$mul18:
				$p['op_mul']($mul17,$mul18)),$add80=$constant_int_25), $p['__op_add']($add81=$constant_int_300,$add82=$constant_int_50)])]);
			$pyjs['track']['lineno']=266;
			if ($p['bool']($p['op_eq']($m['direction'], 'right'))) {
				$pyjs['track']['lineno']=267;
				vertices = $p['list']([$p['tuple']([(typeof ($mul19=$m['posX'])==typeof ($mul20=$constant_int_50) && typeof $mul19=='number'?
					$mul19*$mul20:
					$p['op_mul']($mul19,$mul20)), $constant_int_300]), $p['tuple']([$p['__op_add']($add83=(typeof ($mul21=$m['posX'])==typeof ($mul22=$constant_int_50) && typeof $mul21=='number'?
					$mul21*$mul22:
					$p['op_mul']($mul21,$mul22)),$add84=$constant_int_50), $p['__op_add']($add85=$constant_int_300,$add86=$constant_int_25)]), $p['tuple']([(typeof ($mul23=$m['posX'])==typeof ($mul24=$constant_int_50) && typeof $mul23=='number'?
					$mul23*$mul24:
					$p['op_mul']($mul23,$mul24)), $p['__op_add']($add87=$constant_int_300,$add88=$constant_int_50)])]);
			}
			else if ($p['bool']($p['op_eq']($m['direction'], 'left'))) {
				$pyjs['track']['lineno']=269;
				vertices = $p['list']([$p['tuple']([$p['__op_add']($add89=(typeof ($mul25=$m['posX'])==typeof ($mul26=$constant_int_50) && typeof $mul25=='number'?
					$mul25*$mul26:
					$p['op_mul']($mul25,$mul26)),$add90=$constant_int_50), $constant_int_300]), $p['tuple']([$p['__op_add']($add91=(typeof ($mul27=$m['posX'])==typeof ($mul28=$constant_int_50) && typeof $mul27=='number'?
					$mul27*$mul28:
					$p['op_mul']($mul27,$mul28)),$add92=$constant_int_50), $p['__op_add']($add93=$constant_int_300,$add94=$constant_int_50)]), $p['tuple']([(typeof ($mul29=$m['posX'])==typeof ($mul30=$constant_int_50) && typeof $mul29=='number'?
					$mul29*$mul30:
					$p['op_mul']($mul29,$mul30)), $p['__op_add']($add95=$constant_int_300,$add96=$constant_int_25)])]);
			}
			else if ($p['bool']($p['op_eq']($m['direction'], 'down'))) {
				$pyjs['track']['lineno']=271;
				vertices = $p['list']([$p['tuple']([(typeof ($mul31=$m['posX'])==typeof ($mul32=$constant_int_50) && typeof $mul31=='number'?
					$mul31*$mul32:
					$p['op_mul']($mul31,$mul32)), $constant_int_300]), $p['tuple']([$p['__op_add']($add97=(typeof ($mul33=$m['posX'])==typeof ($mul34=$constant_int_50) && typeof $mul33=='number'?
					$mul33*$mul34:
					$p['op_mul']($mul33,$mul34)),$add98=$constant_int_50), $constant_int_300]), $p['tuple']([$p['__op_add']($add99=(typeof ($mul35=$m['posX'])==typeof ($mul36=$constant_int_50) && typeof $mul35=='number'?
					$mul35*$mul36:
					$p['op_mul']($mul35,$mul36)),$add100=$constant_int_25), $p['__op_add']($add101=$constant_int_300,$add102=$constant_int_50)])]);
			}
			$pyjs['track']['lineno']=274;
			$m['pygame']['draw']['polygon']($m['DISPLAYSURF'], $p['tuple']([$constant_int_190, $constant_int_78, $constant_int_89]), vertices, $constant_int_0);
			$pyjs['track']['lineno']=275;
			$p['printFunc']([$m['posY'], ', ', $m['posX']], 1);
			$pyjs['trackstack']['pop']();$pyjs['track']=$pyjs['trackstack']['pop']();$pyjs['trackstack']['push']($pyjs['track']);
			return null;
		};
		$m['renderCharacter']['__name__'] = 'renderCharacter';

		$m['renderCharacter']['__bind_type__'] = 0;
		$m['renderCharacter']['__args__'] = [null,null];
		$pyjs['track']['lineno']=278;
		$m['renderScreen'] = function() {
			if ($pyjs['options']['arg_count'] && arguments['length'] != 0) $pyjs__exception_func_param(arguments['callee']['__name__'], 0, 0, arguments['length']);
			var j,$sub56,color,$add103,$iter8_iter,$add105,startPos,tileType,$mul48,PURPLE,$mul45,$mul46,$mul47,$mul40,$mul41,$mul42,$mul43,$add108,$mul39,$iter7_type,$or20,$or21,$or22,BLUE,$sub55,$iter8_idx,$add104,$add107,$add106,$iter7_iter,$iter8_type,$pyjs__trackstack_size_1,$iter8_nextval,$iter7_idx,WHITE,$mul37,PINK,$iter7_nextval,i,$iter7_array,$iter8_array,$mul44,$pyjs__trackstack_size_2,$mul38,$or19;
			$pyjs['track']={'module':'game3','lineno':278};$pyjs['trackstack']['push']($pyjs['track']);
			$pyjs['track']['module']='game3';
			$pyjs['track']['lineno']=278;
			$pyjs['track']['lineno']=279;
			$pyjs['track']['lineno']=281;
			PINK = $p['tuple']([$constant_int_255, $constant_int_0, $constant_int_128]);
			$pyjs['track']['lineno']=282;
			PURPLE = $p['tuple']([$constant_int_147, $constant_int_112, $constant_int_219]);
			$pyjs['track']['lineno']=283;
			BLUE = $p['tuple']([$constant_int_135, $constant_int_216, $constant_int_250]);
			$pyjs['track']['lineno']=284;
			WHITE = $p['tuple']([$constant_int_255, $constant_int_255, $constant_int_255]);
			$pyjs['track']['lineno']=285;
			color = WHITE;
			$pyjs['track']['lineno']=286;
			$m['DISPLAYSURF']['fill']($p['tuple']([$constant_int_255, $constant_int_255, $constant_int_255]));
			$pyjs['track']['lineno']=287;
			$pyjs__trackstack_size_1=$pyjs['trackstack']['length'];
			$iter7_iter = $p['xrange']($constant_int_0, $m['boardArrHeight']);
			$iter7_nextval=$p['__iter_prepare']($iter7_iter,false);
			while (typeof($p['__wrapped_next']($iter7_nextval)['$nextval']) != 'undefined') {
				i = $iter7_nextval['$nextval'];
				$pyjs['track']['lineno']=288;
				$pyjs__trackstack_size_2=$pyjs['trackstack']['length'];
				$iter8_iter = $p['xrange']($constant_int_0, $constant_int_10);
				$iter8_nextval=$p['__iter_prepare']($iter8_iter,false);
				while (typeof($p['__wrapped_next']($iter8_nextval)['$nextval']) != 'undefined') {
					j = $iter8_nextval['$nextval'];
					$pyjs['track']['lineno']=289;
					tileType = $m['boardArr']['__getitem__'](i)['__getitem__'](j);
					$pyjs['track']['lineno']=291;
					if ($p['bool'](($p['bool']($or19=$p['op_eq'](tileType, $constant_int_1))?$or19:$p['op_eq'](tileType, '1')))) {
						$pyjs['track']['lineno']=292;
						$p['printFunc'](['PINK'], 1);
						$pyjs['track']['lineno']=293;
						color = PINK;
					}
					else if ($p['bool']($p['op_eq'](tileType, $constant_int_2))) {
						$pyjs['track']['lineno']=295;
						$p['printFunc'](['PURPLE'], 1);
						$pyjs['track']['lineno']=296;
						color = PURPLE;
					}
					else if ($p['bool']($p['op_eq'](tileType, $constant_int_3))) {
						$pyjs['track']['lineno']=298;
						$p['printFunc'](['BLUE'], 1);
						$pyjs['track']['lineno']=299;
						color = BLUE;
					}
					else if ($p['bool'](($p['bool']($or21=$p['op_eq'](tileType, $constant_int_4))?$or21:$p['op_eq'](tileType, $constant_int_5)))) {
						$pyjs['track']['lineno']=301;
						color = $p['tuple']([$constant_int_0, $constant_int_0, $constant_int_0]);
					}
					else {
						$pyjs['track']['lineno']=303;
						color = WHITE;
					}
					$pyjs['track']['lineno']=304;
					startPos = $p['__op_sub']($sub55=$constant_int_300,$sub56=(typeof ($mul37=$m['posY'])==typeof ($mul38=$constant_int_50) && typeof $mul37=='number'?
						$mul37*$mul38:
						$p['op_mul']($mul37,$mul38)));
					$pyjs['track']['lineno']=305;
					if ($p['bool'](($p['cmp']($p['__op_add']($add103=startPos,$add104=(typeof ($mul39=i)==typeof ($mul40=$constant_int_50) && typeof $mul39=='number'?
						$mul39*$mul40:
						$p['op_mul']($mul39,$mul40))), $constant_int_1000) == 1))) {
						$pyjs['track']['lineno']=306;
						break;
					}
					$pyjs['track']['lineno']=307;
					$m['pygame']['draw']['rect']($m['DISPLAYSURF'], color, $m['pygame']['Rect']((typeof ($mul41=j)==typeof ($mul42=$constant_int_50) && typeof $mul41=='number'?
						$mul41*$mul42:
						$p['op_mul']($mul41,$mul42)), $p['__op_add']($add105=startPos,$add106=(typeof ($mul43=i)==typeof ($mul44=$constant_int_50) && typeof $mul43=='number'?
						$mul43*$mul44:
						$p['op_mul']($mul43,$mul44))), $constant_int_50, $constant_int_50), $constant_int_0);
					$pyjs['track']['lineno']=308;
					$m['pygame']['draw']['rect']($m['DISPLAYSURF'], WHITE, $m['pygame']['Rect']((typeof ($mul45=j)==typeof ($mul46=$constant_int_50) && typeof $mul45=='number'?
						$mul45*$mul46:
						$p['op_mul']($mul45,$mul46)), $p['__op_add']($add107=startPos,$add108=(typeof ($mul47=i)==typeof ($mul48=$constant_int_50) && typeof $mul47=='number'?
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
			$pyjs['track']['lineno']=310;
			$m['renderScoreAndStomach']();
			$pyjs['track']['lineno']=311;
			$m['renderCharacter']();
			$pyjs['track']['lineno']=312;
			$m['pygame']['display']['flip']();
			$pyjs['trackstack']['pop']();$pyjs['track']=$pyjs['trackstack']['pop']();$pyjs['trackstack']['push']($pyjs['track']);
			return null;
		};
		$m['renderScreen']['__name__'] = 'renderScreen';

		$m['renderScreen']['__bind_type__'] = 0;
		$m['renderScreen']['__args__'] = [null,null];
		$pyjs['track']['lineno']=317;
		$m['die'] = function() {
			if ($pyjs['options']['arg_count'] && arguments['length'] != 0) $pyjs__exception_func_param(arguments['callee']['__name__'], 0, 0, arguments['length']);

			$pyjs['track']={'module':'game3','lineno':317};$pyjs['trackstack']['push']($pyjs['track']);
			$pyjs['track']['module']='game3';
			$pyjs['track']['lineno']=317;
			$pyjs['track']['lineno']=318;
			$p['printFunc'](['collapsed on character'], 1);
			$pyjs['trackstack']['pop']();$pyjs['track']=$pyjs['trackstack']['pop']();$pyjs['trackstack']['push']($pyjs['track']);
			return null;
		};
		$m['die']['__name__'] = 'die';

		$m['die']['__bind_type__'] = 0;
		$m['die']['__args__'] = [null,null];
		$pyjs['track']['lineno']=320;
		if ($p['bool']($p['op_eq']((typeof __name__ == "undefined"?$m['__name__']:__name__), '__main__'))) {
			$pyjs['track']['lineno']=321;
			$m['main']();
		}
	} catch ($pyjs_attr_err) {throw $p['_errorMapping']($pyjs_attr_err);};
	return this;
}; /* end game3 */


/* end module: game3 */


/*
PYJS_DEPS: ['random', 'time', 'sys', 'pyjsdl', 'textdata.txtFile', 'textdata']
*/
