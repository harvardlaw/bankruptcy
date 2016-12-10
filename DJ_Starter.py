from flask import Flask
from flask import render_template, redirect, url_for
from flask import jsonify
from flask import request
from static.python import questions, analyze
from collections import OrderedDict
import ast
import docxtpl
import urllib
import json

app = Flask(__name__)

@app.route('/')
def main_page():
    list = questions.returntesty()
    d = list[1].valuelist
    league = OrderedDict(sorted(d.items(), key=lambda x: x[1], reverse=False))
    return render_template('index.html', xlist = list, answers = league)

@app.route('/finished', methods=['GET'])
def finished():
    print "finished"
    return render_template('finished.html')

def endYN(dict):
    if 'q13' in dict:
        listYNQ = ["q3","q4","q5","q6", "q7", "q9", "q10", "q11","q12"]
        for key, v in dict.items():
            for i in range(len(listYNQ)):
                if key == listYNQ[i] and int(v[4]) == 0:
                    dict[key] = 'Yes'
                if key == listYNQ[i] and int(v[4]) == 1:
                    dict[key] = 'No'
        pathfrom = app.root_path + '/static/files/demo.docx'
        pathto = app.root_path + '/static/files/demoX.docx'
        templateDocument = docxtpl.DocxTemplate(pathfrom)
        templateDocument.render(dict)
        templateDocument.save(pathto)

def pacer(dict):
    if 'q13.0' in dict.values():
        partyname = dict['q1']
        split = partyname.split(" ", 1)
        firstname = split[0]
        lastname = split[1]
        apikey = ""
        # apikey = "hyxS7CQczefd7rWy9zsu"
        url = "https://www.enclout.com/api/v1/pacer/show.json?auth_token={}".format(apikey) + "&sel_court=bk&sel_region=00&date_filed_start=&date_filed_end=&date_term_start=&date_term_end=&case_no=" + "&party={}".format(lastname) + "%2C%20{}".format(firstname) + "&ssn=&ssn4="
        data = urllib.urlopen(url).read().decode("utf-8")
        obj = json.loads(data)
        cases = obj["cases"]
        dict['pacer'] = cases
        return dict

@app.route('/postmethod', methods = ['GET', 'POST'])
def get_post_javascript_data():
    dict = ast.literal_eval(request.form['all_data'])
    c = analyze.direction(dict['current'], dict)
    pacer(dict)
    yn = endYN(dict)

    return jsonify({'from' : c[0],
                    'to'   : c[1],
                    'end'  : yn})


if __name__ == '__main__':
    app.run()

