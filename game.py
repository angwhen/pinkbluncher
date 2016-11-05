import random, time, pygame, sys
import numpy as np
from pygame.locals import *

boardArr = np.array([10,100])

def main():
    global FPSCLOCK, DISPLAYSURF, BASICFONT, BIGFONT
    pygame.init()
    FPSCLOCK = pygame.time.Clock()
    DISPLAYSURF = pygame.display.set_mode((WINDOWWIDTH, WINDOWHEIGHT))
    BASICFONT = pygame.font.Font('freesansbold.ttf', 18)
    BIGFONT = pygame.font.Font('freesansbold.ttf', 100)
    pygame.display.set_caption('Cotton Candy')

    while True: # game loop
        runGame()
        showTextScreen('Game Over')


def runGame():
	#setup variables and stuff
	while True: #game loop
		 for event in pygame.event.get(): # event handling loop
            if event.type == KEYDOWN:
                if (event.key == K_LEFT or event.key == K_a):
                   
                elif (event.key == K_RIGHT or event.key == K_d) :
                    

                elif (event.key == K_UP or event.key == K_w):
                    
            
                elif (event.key == K_DOWN or event.key == K_s):
                    
                elif event.key == K_SPACE: #eat
                    eat()
			elif event.type == KEYUP:
                if (event.key == K_LEFT or event.key == K_a):
                    movingLeft = False
                elif (event.key == K_RIGHT or event.key == K_d):
                    movingRight = False
                elif (event.key == K_DOWN or event.key == K_s):
                    movingDown = False