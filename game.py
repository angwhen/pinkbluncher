import random, time, pygame, sys
import numpy as np
from pygame.locals import *

WINDOWWIDTH = 500
WINDOWHEIGHT = 700
boardArrHeight = 200;
boardArr = np.array([boardArrHeight,10])
posX = 5 #chracter position
posY = 0
direction = "down"
score = 0
stomachSpace = 100
numLives = 0
collapseGroupHolder = np.zeros((boardArrHeight,10))

def initBoardArr():
    global boardArr
    #initialize boardArr
    choices = [1,2,3,4,5] #pink, purple, blue, 100 point jewels, 200 point jewels
    boardArr = np.random.choice(choices,(boardArrHeight,10),p=[0.3,0.3,0.3,0.05,0.05])
    boardArr[posY,posX] = 0
    print boardArr
    #print "HIIII"
    #print "hey"

def main():
    global FPSCLOCK, DISPLAYSURF, BASICFONT, BIGFONT
    pygame.init()
    print "in main"
    FPSCLOCK = pygame.time.Clock()
    DISPLAYSURF = pygame.display.set_mode((WINDOWWIDTH, WINDOWHEIGHT))
    DISPLAYSURF.fill((255,255,255))
    BASICFONT = pygame.font.Font('freesansbold.ttf', 18)
    BIGFONT = pygame.font.Font('freesansbold.ttf', 100)
    pygame.display.set_caption('Cotton Candy')
    initBoardArr()
    renderScreen()
    while True: # game loop
        runGame()
        showTextScreen('Game Over')
def runGame():
    global posX, posY,direction
    while True:
	collapse() #may be superfluous
        for event in pygame.event.get(): # event handling loop
            if event.type == KEYDOWN:
                if (event.key == K_LEFT or event.key == K_a):
		    print "left pressed"
                    if(direction == "left"):
                        move(direction)
                    direction = "left"
                elif (event.key == K_RIGHT or event.key == K_d) :
                    print "right pressed"
		    if(direction == "right"):
                        move(direction)
                    direction = "right"
                elif (event.key == K_UP or event.key == K_w):
		    print "up pressed"
                    direction == "up"
                elif (event.key == K_DOWN or event.key == K_s):
		    print "down pressed"
                    if(direction == "down"):
                        move(direction)
                    direction = "down"
                elif event.key == K_SPACE: #eat
		    print "eating direction is ", direction
                    eat(direction)
		renderScreen()
def canEat(goal):
    global boardArr
    if goal[0] < 0 or goal[1] < 0 or goal[1] >=10:
	print "cant eat because off screen"
	return False
    row = goal[0]
    col = goal[1]
    if boardArr[row,col] == 0:
	print "cant eat because empty there: " ,direction
        return False
    else:
	return True 
    #return true or false based on if can eat

def eat(direction):
    global posX,posY,boardArr,stomachSpace, score
    goal = (0,0)
    if direction == "right":
        goal = (posY,posX+1)
    elif direction == "left":
	goal = (posY,posX-1)
    elif direction == "down":
	goal = (posY+1,posX)
	
    #say where the goal to eat is
    if canEat(goal): 
	stomachSpace -= 1
	row = goal[0]
	col = goal[1]
	getEatGroup(goal,boardArr[row,col]) 
	#boardArr[row,col] = 0
        #other eating things
    collapse()
    renderScreen()

def getEatGroup(goal,tileType):
    global boardArr, score
    row = goal[0]
    col = goal[1]
    print "tile type is: ",boardArr[row,col]
    #if boardArr[row][col] == tileType:
    boardArr[row][col] = 0
    score += 1
    if col+1 < 10 and boardArr[row][col+1] == tileType:
        getEatGroup((row,col+1),tileType)
    if col-1 >= 0 and boardArr[row][col-1] == tileType:
	getEatGroup((row,col-1),tileType)
    if boardArr[row+1][col] == tileType:    	
        getEatGroup((row+1,col),tileType)
    if row-1 >= 0 and boardArr[row-1][col] == tileType:
	getEatGroup((row-1,col),tileType)
 

def collapsable(row,col,num):
    global boardArr
    sameType = boardArr[row][col]
    if sameType == 0:
	return False
    if col+1 <10 and (boardArr[row][col+1] == sameType or num>0): #right one
	if not collapsable(row,col+1,num+1):
	    return False
    if row-1>=0 and (boardArr[row-1][col] == sameType or num>0):
	if not collapsable(row-1,col,num+1):
	    return False
    return True

def getCollapseGroup(row,col,tileType): #new group collapsing methods is ???
    global boardArr, score, collapseGroupHolder
    group = []
    done = 0
    if collapseGroupHolder[row][col] == 0:
    	group.append((row,col))
    collapseGroupHolder[row][col] = 1
    if col+1 < 10 and boardArr[row][col+1] == tileType and collapseGroupHolder[row][col+1] == 0:
        group.extend(getCollapseGroup(row,col+1,tileType))
    if col-1 >= 0 and boardArr[row][col-1] == tileType and collapseGroupHolder[row][col-1] == 0:
	group.extend(getCollapseGroup(row,col-1,tileType))
    if row+1 < boardArrHeight and boardArr[row+1][col] == tileType and collapseGroupHolder[row+1][col] == 0:    	
        group.extend(getCollapseGroup(row+1,col,tileType))
    if row-1 >= 0 and boardArr[row-1][col] == tileType and collapseGroupHolder[row-1][col] == 0:
	group.extend(getCollapseGroup(row-1,col,tileType))
    #if group != []:
	#print group, " this is group"
    return group

def canCollapse(group):
    global boardArr
    can = True
    for i in group:
	if (i[0]+1,i[1]) not in group and i[0]+1 < boardArrHeight and boardArr[i[0]+1,i[1]] != 0:
	    can = False
    #if group != [] and can:
	#print "helloooo"
    return can

def collapseGroup(group):
    global boardArr
    for i in group:
	if i[0]+1 < boardArrHeight:
	    boardArr[i[0]+1,i[1]] = boardArr[i[0],i[1]]
            boardArr[i[0],i[1]] = 0

def collapse():
   global posX,posY,boardArr, collapseGroupHolder
   for i in xrange(0,boardArrHeight-1):
	for j in xrange(0,10):
	    #if boardArr[i+1,j] == 0 and not(i+1==posY and j ==posX):
		#if collapsable(i,j,0):		
		 #   boardArr[i+1,j] = boardArr[i,j]
		  #  boardArr[i,j] = 0
	    #if not boardArr[i+1,j] == 0 and i+1 == posY and j == posX:
		#die()
	    collapseGroupHolder = np.zeros((boardArrHeight,10))
   	    group = getCollapseGroup(i,j,boardArr[i,j])
	    if canCollapse(group):
		collapseGroup(group)
	    #if not group == []:
		#print group
   collapseCharacter()

def collapseCharacter():
   global posX,posY,boardArr
   while (boardArr[posY+1,posX] == 0):
	posY += 1

def canMove(goal):
    if goal[0] < 0 or goal[1] < 0 or goal[1] >=10:
	print "cant move because off screen y: ",goal[0]," x: ",goal[1]
	return False
    return not(canEat(goal))

def move(direction):
    global posX, posY,boardArr
    goal = (0,0)
    if direction == "right":
        goal = (posY,posX+1)
    elif direction == "left":
	goal = (posY,posX-1)
    elif direction == "down":
	goal = (posY+1,posX)
    if canMove(goal):
        if direction == "right":
            posX += 1 
        elif direction == "left":
	    posX = posX -1
        elif direction == "down":
	    posY += 1
    elif canMove((goal[0]-1,goal[1])):
 	if direction == "right":
            posX += 1
        elif direction == "left":
	    posX -= 1
	posY -= 1
    elif canMove((goal[0]+1,goal[1])):
 	if direction == "right":
            posX += 1
        elif direction == "left":
	    posX -= 1
	posY += 1
    #if moving downwards move the screen downwards
    collapse()
    renderScreen()

def renderScoreAndStomach():
    if pygame.font:
        font = pygame.font.Font(None, 36)
	scoreText = "Score: %d    Belly Space: %d" %(score,stomachSpace)
        text = font.render(scoreText, 1, (0, 0, 0))
        textpos = text.get_rect(centerx=DISPLAYSURF.get_width()/2)
        DISPLAYSURF.blit(text, textpos)
    else:
	print "fonts disabled"
def renderCharacter():
    global posX,posY,boardArr, DISPLAYSURF,direction
    #myimage = pygame.image.load("rightCharacter.png")
    #imagerect = myimage.get_rect()
    vertices = [(posX*50,300),(posX*50+50,300),(posX*50+25,300+50)]
    if direction == "right":
	vertices = [(posX*50,300),(posX*50+50,300+25),(posX*50,300+50)]
    elif direction == "left":
	vertices = [(posX*50+50,300),(posX*50+50,300+50),(posX*50,300+25)]
    elif direction == "down":
	vertices = [(posX*50,300),(posX*50+50,300),(posX*50+25,300+50)]
	#myimage = pygame.image.load("rightCharacter.png")
	#imagerect = myimage.get_rect()
    pygame.draw.polygon(DISPLAYSURF,(190,78,89), vertices, 0)
    #pygame.draw.rect(DISPLAYSURF,(89,34,32),pygame.Rect(posX*50,300,50,50),0)
    print posY, ", ", posX
    #print "hello"
    #DISPLAYSURF.blit(myimage, imagerect)
    #pygame.display.flip()
	
def renderScreen():
    global posX,posY,boardArr, boardArrHeight, DISPLAYSURF

    PINK = (255,0,128)
    PURPLE = (147,112,219)
    BLUE = (135,216,250)
    WHITE = (255,255,255)
    color = WHITE
    DISPLAYSURF.fill((255,255,255))
    for i in xrange(0,boardArrHeight):
	for j in xrange(0,10):
	    tileType = boardArr[i,j]
	    if tileType == 1:
		color = PINK
	    elif tileType == 2:
		color = PURPLE
	    elif tileType == 3:
		color = BLUE
	    elif tileType == 4 or tileType == 5:
		color = (0,0,0)
	    else:
		color = WHITE
	    startPos = 300-posY*50
	    pygame.draw.rect(DISPLAYSURF,color,pygame.Rect(j*50,startPos+i*50,50,50),0)
	    pygame.draw.rect(DISPLAYSURF,WHITE,pygame.Rect(j*50,startPos+i*50,50,50),5)
    renderScoreAndStomach()
    renderCharacter()
    pygame.display.flip()
	    
    #draw the screen where it should be
    

def die():
    print "collapsed on character" #what happens when you die


if __name__ == '__main__':
    main()
