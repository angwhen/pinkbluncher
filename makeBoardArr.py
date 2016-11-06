import numpy as np
boardArrHeight = 200;
boardArr = np.array([boardArrHeight,10])
posX = 5
posY = 0

def initBoardArr():
    global boardArr
    #initialize boardArr
    choices = [1,2,3,4,5] #pink, purple, blue, 100 point jewels, 200 point jewels
    boardArr = np.random.choice(choices,(boardArrHeight,10),p=[0.3,0.3,0.3,0.05,0.05])
    boardArr[posY,posX] = 0
    np.savetxt("boardArr.txt",boardArr,fmt='%i')

initBoardArr()
