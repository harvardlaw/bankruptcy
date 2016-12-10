import requests

def direction(selection, datum):
    # print(datum)
    return eval('question' + str(int(selection[1:3])) + "(int(selection[4:5]), datum)")

def updateQs(selection, datum):
    # print datum
    x = str(int(selection[1:3]))
    if x == "1":
        return eval('update' + str(int(selection[1:3])) + "(int(selection[4:5]), datum)")

def removeQ(selection, datum):
    return eval('remove' + str(int(selection[1:3])) + "(int(selection[4:5]), datum)")

# you can call upon all the code and answers to determine where to go next if you need to.
def question1(sel_num, datum):
    if sel_num == 0:
        l = ["#q1", '#q2']
        return l
    elif sel_num == 1:
        l = ["#q1", '#q2']
        return l

def question2(sel_num, datum):
    if sel_num == 0:
        l = ["#q2", '#q3']
        return l
    elif sel_num == 1:
        l = ["#q2", '#q3']
        return l

def question3(sel_num, datum):
    if sel_num == 0:
        l = ["#q3", '#q4']
        return l
    elif sel_num == 1:
        l = ["#q3", '#q4']
        return l

def question4(sel_num, datum):
    if sel_num == 0:
        l = ["#q4", '#q5']
        return l
    elif sel_num == 1:
        l = ["#q4", '#q6']
        return l

def question5(sel_num, datum):
    if sel_num == 0:
        l = ["#q5", '#q6']
        return l
    elif sel_num == 1:
        l = ["#q5", '#q6']
        return l

def question6(sel_num, datum):
    if sel_num == 0:
        l = ["#q6", '#q7']
        return l
    elif sel_num == 1:
        l = ["#q6", '#q7']
        return l

def question7(sel_num, datum):
    if sel_num == 0:
        l = ["#q7", '#q8']
        return l
    elif sel_num == 1:
        l = ["#q7", '#q9']
        return l

def question8(sel_num, datum):
    if sel_num == 0:
        l = ["#q8", '#q9']
        return l
    elif sel_num == 1:
        l = ["#q8", '#q9']
        return l

def question9(sel_num, datum):
    if sel_num == 0:
        l = ["#q9", '#q10']
        return l
    elif sel_num == 1:
        l = ["#q9", '#q11']
        return l

def question10(sel_num, datum):
    if sel_num == 0:
        l = ["#q10", '#q11']
        return l
    elif sel_num == 1:
        l = ["#q10", '#q11']
        return l

def question11(sel_num, datum):
    if sel_num == 0:
        l = ["#q11", '#q12']
        return l
    elif sel_num == 1:
        l = ["#q11", '#q12']
        return l

def question12(sel_num, datum):
    if sel_num == 0:
        l = ["#q12", '#q13']
        return l
    elif sel_num == 1:
        l = ["#q12", '#q13']
        return l

def question13(sel_num, datum):
    if sel_num == 0:
        l = ["#q13", '#q13']
        return l
    elif sel_num == 1:
        l = ["#q13", '#q13']
        return l



def remove1(sel_num, datum):
    if 'q2' in datum:
        # remove q2
        return ['#q2']
    return []

def remove2(sel_num, datum):
    if 'q3' in datum:
        # remove q2
        return ['#q3']
    return []

def remove3(sel_num, datum):
    if 'q4' in datum:
        # remove q2
        return ['#q4']
    return []

def remove4(sel_num, datum):
    if 'q5' in datum:
        return ['#q5']
    return []

def remove5(sel_num, datum):
    if 'q6' in datum:
        # remove q2
        return ['#q6']
    return []

def remove6(sel_num, datum):
    if 'q7' in datum:
        # remove q2
        return ['#q7']
    return []

def remove7(sel_num, datum):
    if 'q8' in datum:
        # remove q2
        return ['#q8']
    return []

def remove8(sel_num, datum):
    if 'q9' in datum:
        # remove q2
        return ['#q9']
    return []

def remove9(sel_num, datum):
    if 'q10' in datum:
        # remove q2
        return ['#q10']
    return []
