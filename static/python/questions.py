# -*- coding: utf-8 -*-
from collections import OrderedDict
#!/usr/bin/env python
# -*- coding: utf-8 -*-

from flask import Markup


class QuestionObject():
    question = ''
    alternatequestion = ''
    title = ''
    valuelist = []
    secondarytext = ''
    type = ''
    helpbox = ''
    icon = ''
    link = ''
    style = "none"
    input = ''
    function = ''

# BIO
q1 = {
    "q" : Markup("Hello! What's your full name?"),
    "aq": "This is an alternate question?",
    "t" : 'q1',
    "v" : {"Next":'q01.0',
            },
    "d" : "Please enter your first and last name:",
    "y" : "text",
    "e" : "help",
    "ic": "face",
    "l" : "url",
    "s" : "",
    "i" : "text",
    "f" : "update_site",
}

# BIO
q2 = {
    "q" : Markup("What is your date of birth?"),
    "aq": "aq",
    "t" : 'q2',
    "v" : {"Next":'q02.0',
            },
    "d" : "Please enter your date of birth in the following format: MM/DD/YYYY",
    "y" : "date",
    "e": "help",
    "ic": "date_range",
    "l" : "url",
    "s" : "None",
    "i" : "text",
    "f" : "update_site",
}

# SSA
q3    = {
    "q" : "Are you currently employed?",
    "aq": "aq",

    "t" : 'q3',
    "v" : {"Yes":'q03.0',
           "No":'q03.1',
           },
    "d": "d",
    "y": "",
    "e" : "help",
    "ic": "",
    "l" : "url",
    "s" : "None",
    "i": "button",
    "f": "update_site",

}

# SSA
q4 = {
    "q" : "Are you currently receiving any Social Security benefits?",
    "aq": "aq",
    "t" : 'q4',
    "v" : {"Yes":'q04.0',
           "No":'q04.1',
		   },
    "d": "",
    "y": "",
    "e" : "help",
    "ic": "bug report",
    "l" : "url",
    "s" : "None",
    "i": "button",
    "f": "update_site",
}

# SSA
q5 = {
    "q" : "Do you have a copy of your social security statement?",
    "aq": "aq",
    "t" : 'q5',
    "v" : {"Yes":'q05.0',
           "No":'q05.1'
		   },
    "d": "",
    "y": "",
    "e" : "help",
    "ic": "android",
    "l" : "url",
    "s" : "None",
    "i": "button",
    "f": "update_site",
}

# HOME
q6 = {
    "q" : "Do you own a house or apartment?",
    "aq": "aq",
    "t" : 'q6',
    "v" : {"Yes":'q06.0',
           "No":'q06.1',
		   },
    "d": "",
    "y": "",
    "e" : "help",
    "ic": "",
    "l" : "url",
    "s" : "None",
    "i": "button",
    "f": "update_site",
}

# VEH
q7 = {
    "q" : "Do you own a motor vehicle?",
    "aq": "aq",

    "t" : 'q7',
    "v" : {"Yes":'q07.0',
           "No":'q07.1',
           },
    "d": "",
    "y": "",
    "e" : "help",
    "ic": "",
    "l" : "url",
    "s" : "None",
    "i": "button",
    "f": "update_site",
}

q8 = {
    "q" : "What kind of vehicle motor do you have?",
    "aq": "aq",

    "t" : 'q8',
    "v" : {"Next":'q08.0',
           },
    "d": "",
    "y": "",
    "e" : "help",
    "ic": "",
    "l" : "url",
    "s" : "None",
    "i": "dropdown",
    "f": "update_site",
}

# TAX
q9 = {
    "q" : "Have you filed for tax returns for the past two years?",
    "aq": "aq",
    "t" : 'q9',
    "v" : {"Yes":'q09.0',
           "No":'q09.1',
           },
    "d": "",
    "y": "",
    "e" : "help",
    "ic": "",
    "l" : "url",
    "s" : "None",
    "i": "button",
    "f": "update_site",
}

# TAX
q10 = {
    "q" : "Do you have copies of the past two years' tax returns?",
    "aq": "aq",
    "t" : 'q10',
    "v" : {"Yes":'q10.0',
           "No":'q10.1',
           },
    "d": "",
    "y": "",
    "e" : "help",
    "ic": "",
    "l" : "url",
    "s" : "None",
    "i": "button",
    "f": "update_site",
}

# COURT
q11 = {
    "q" : "Have you ever been a party to any civil or criminal lawsuits?",
    "aq": "aq",
    "t" : 'q11',
    "v" : {"Yes":'q11.0',
           "No":'q11.1',
           },
    "d": "",
    "y": "",
    "e" : "lawsuit info",
    "ic": "",
    "l" : "url",
    "s" : "None",
    "i": "button",
    "f": "update_site",
}


# BANK
q12 = {
    "q" : "Have you previously filed for bankruptcy?",
    "aq": "aq",
    "t" : 'q12',
    "v" : {"Yes":'q12.0',
           "No":'q12.1',
           },
    "d": "",
    "y": "",
    "e" : "bankruptcy info",
    "ic": "",
    "l" : "url",
    "s" : "None",
    "i": "button",
    "f": "update_site",
}

q13 = {
    "q" : "Would you like to run a PACER search?",
    "aq": "aq",
    "t" : 'q13',
    "v" : {"Yes":'q13.0',
           "No":'q13.1',
           },
    "d": "",
    "y": "",
    "e" : "bankruptcy info",
    "ic": "",
    "l" : "url",
    "s" : "None",
    "i": "button",
    "f": "update_site",
}
def make_query(q):
    d = q['v']
    Markup('<strong>The HTML String</strong>')
    query = QuestionObject()
    query.question = q['q']
    query.alternateq = q['aq']
    query.title = q['t']
    query.valuelist = OrderedDict(sorted(d.items(), key=lambda x: x[1], reverse=False))
    query.secondarytext = q['d']
    query.type = q['y']
    query.helpbox = q['e']
    query.icon = q['ic']
    query.link = q['l']
    query.style = q['s']
    query.input = q['i']
    query.function = q['f']

    return query


def returntesty():
    qlist = []
    theQuestions = [q1, q2, q3, q4, q5, q6, q7, q8, q9, q10, q11, q12, q13]
    for i in theQuestions:
        qlist.append(make_query(i))
    return qlist


