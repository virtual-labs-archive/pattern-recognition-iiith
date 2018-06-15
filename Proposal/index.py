import os
from flask import Flask, render_template, send_from_directory,url_for, request

app = Flask(__name__, static_url_path='')


@app.route('/static/<path:path>')
def send_static(path):
    return send_from_directory('static',path)

@app.route('/getCompressedFiles/<path:path>')
def send_compressed_file(path):
    return send_from_directory('content/compressed_files',path)

@app.route('/content/<path:path>')
def send_content(path):
    return send_from_directory('content' , path)


@app.route('/')
def home():
    return render_template('home.html')

if __name__ == '__main__':
    app.run(debug=True)