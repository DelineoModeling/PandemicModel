import random

class Person:

    # Initialization function, sets all parameters at once.
    # TODO: have some default parameters if we can't set all of them at once, for initializing them with synthpops.
    def __init__(self, ID, age=0, sex=0, householdLocation=0, householdMembers=[], comorbidities=0, demographicInfo=0, severityRisk=0, currentLocation=0, infectionState=0, incubation=0, infectionTimer=0, peakStateDays=4, maximumInfectionState=-1, recoveryDays = [0, 0, 0, 0]):
        self.setAllParameters(ID, age, sex, householdLocation, householdMembers, comorbidities,
                              demographicInfo, severityRisk, currentLocation, infectionState, incubation, infectionTimer, peakStateDays, maximumInfectionState, recoveryDays)

    # Sets all parameters.
    def setAllParameters(self, ID, age=0, sex=0, householdLocation=0, householdMembers=[], comorbidities=0, demographicInfo=0, severityRisk=0, currentLocation=0, infectionState=False, incubation=0, infectionTimer=0, peakStateDays=4, maximumInfectionState=-1, recoveryDays = [0, 0, 0, 0]):
        self.ID = ID
        self.age = age
        self.sex = sex
        self.householdLocation = householdLocation
        self.householdMembers = householdMembers
        self.comorbidities = comorbidities
        self.demographicInfo = demographicInfo
        self.severityRisk = severityRisk
        self.currentLocation = currentLocation
        # 0: susceptible, 1: mild, 2: severe, 3: critical, 4: recovered
        self.infectionState = infectionState
        self.incubation = incubation
        self.disease = []
        self.infectionTimer = infectionTimer
        self.peakStateDays = peakStateDays
        self.maximumInfectionState = maximumInfectionState
        self.recoveryDays = recoveryDays

    def getID(self):
        return self.ID

    # sets specific parameters from the info available in the synthpops generated population.
    #householdLocation = location, householdMembers = contacts
    def setSynthPopParameters(self, age, sex, householdLocation, householdMembers):
        self.age = age
        self.sex = sex
        self.householdLocation = householdLocation
        self.householdMembers = householdMembers

    # setters for remaining variables
    def setComorbidities(self, comorbidity):
        self.comorbidities = comorbidity

    def setDemographicInfo(self, demographic):
        self.demographicInfo = demographic

    def setSeverityRisk(self):
        self.severityRisk = self.calcSeverityRisk(
            self.age, self.sex, self.comorbidities, self.demographicInfo)

    def setCurrentLocation(self, location):
        self.currentLocation = location

    def setInfectionState(self, state):
        self.infectionState = state
        self.infectionTimerStart()

    def setIncubation(self, incubation):
        self.incubation = incubation

    def setPeakStateDays(self, peakStateDays):
        self.peakStateDays = peakStateDays

    # calculate severity risk based on demographic factors, as of now calculation is undefined.
    def calcSeverityRisk(self, age, sex, comorbidities):
        return -1

    # getters for all variables
    def getAge(self):
        return self.age

    def getSex(self):
        return self.sex

    def getComorbidities(self):
        return self.comorbidities

    def getDemographicInfo(self):
        return self.demographicInfo

    def getHouseholdLocation(self):
        return self.householdLocation

    def getHouseholdMembers(self):
        return self.householdMembers

    def getSeverityRisk(self):
        return self.severityRisk

    def getCurrentLocation(self):
        return self.currentLocation

    def getInfectionState(self):
        return self.infectionState

    def getIncubation(self):
        return self.incubation

    def updateIncubation(self):
        self.incubation = self.incubation - 1

    def updateState(self):
        return self.incubation + self.severityRisk

    #TODO Ask about severity risk matrix. Where/where will it be implemented?


    #called once infected and each day that passes.
    #Once infected, infection function should update this value to 1.
    def infectionTimerStart(self):
        #once passed 15 days, infection is over.
        #TODO will change depending on severity level.
        if self.infectionTimer > 15:
            self.infectionTimer = 0

        #Otherwise, incremement infectionTimer.
        self.infectionTimer += 1

    #needs to be called once infected. (and updated each day until 0)
    #TODO incubation days change based on severityRisk/age?
    def incubationAssignment(self):
        #get a random number between 1-3 for incubation days
        randNum = random.randInt(1, 3)
        self.incubation = randNum

    #Assign number of days spent at peak state based on severity risk
    #TODO update according to info support research
    def assignNumDaysPeakState(self):
        #peakStateDays ranging from 4-10 days, based on severityRisk
        if self.severityRisk >= 0 & self.severityRisk <=25:
            self.peakStateDays = 4

        elif self.severityRisk >= 25 & self.severityRisk <= 50:
            self.peakStateDays = 6

        elif self.severityRisk >= 50 & self.severityRisk <= 75:
            self.peakStateDays = 8

        else:
            self.peakStateDays = 10

    #assigns number of recovery days left.
    def assignNumRecoveryDays(self):
        #once they have finished their peak days, we can use the infectionTimer to
        #calculate how many days they should spend recovering.
        #Kept split up into the four infection states so the numbers can easily be changed.
        if self.peakStateDay == 0:

            if self.infectionState == 0: #asymptomatic
                #14 to 21 days for recovery
                randNum = random.randInt(14, 21)
                recoveryDaysToBeDivided = randNum - self.infectionTimer

            elif self.infectionState == 1: #mild
                # 14 to 21 days for recovery
                randNum = random.randInt(14, 21)
                recoveryDaysToBeDivided = randNum - self.infectionTimer

            elif self.infectionState == 2:
                #21 to 42 days for recovery
                randNum = random.randInt(21, 42)
                recoveryDaysToBeDivided = randNum - self.infectionTimer

            else:
                #crticial
                randNum = random.randInt(21, 42)
                recoveryDaysToBeDivided = randNum - self.infectionTimer

        #divide the recoveryDays between the different states
        recoveryDaysToBeDivided = randNum - self.infectionTimer

        #divide by number of states left.
        daysPerState = recoveryDaysToBeDivided // (self.infectionState + 1)

        #check to see if any days were left over from round-down division, add to asymptomatic days.
        extraAsymptomatic = 0
        if daysPerState * self.infectionState < recoveryDaysToBeDivided:
            extraAsymptomatic = recoveryDaysToBeDivided - daysPerState * self.infectionState

        #add the recovery days per state into the relevant states left.
        i = self.infectionState
        while i >= 0:
            #if 0, asymptomatic days might need to be added.
            if i == 0:
                self.recoveryDays[i] = daysPerState + extraAsymptomatic
            else:
                #rest of the states
                self.recoveryDays[i] = daysPerState

            i -= 1




    def stateUp(self):
        #once incubation period complete, being moving into next states
        if self.incubation <= 0:
        #maximum infection state variable created
        #TODO check to see where implementation of severity risk matrix will be done and how we will get that info.
            if self.infectionState < self.maximumInfectionState:
                #increment infectionState by  1
                self.infectionState += 1



    def stateDown(self):
        #once peakStateDays end, moving down each date
        #Recovered by day 15

        #patient has few more recoveryDays left in their current infectionState
        if self.recoveryDays[self.infectionState] != 0:
            self.recoveryDays[self.infectionState] -= 1

        else:
            #no more days left in the current infectionState
            #move down one state
            self.infectionState -= 1
            self.recoveryDays[self.infectionState] -= 1
