const express = require('express');
const app = express();
const cors = require('cors');

app.use(cors());

// route api from setion 1 file
app.get('/section_1', (req, res) => {
    const data = {
        status: 'success',
        message: 'section found',
        data: {
            text_2:
                'Trav4College offers a robust platform that includes rich details on admissions, student profiles, cost of study, graduate outcomes and much more.',
            image_1: 'https://trav4college.com/assets/images/home/hero-1.jpg',
            image_2: 'https://trav4college.com/assets/images/home/hero-2.jpg',
            image_3: 'https://trav4college.com/assets/images/home/hero-3.jpg'
        }
    };
    res.status(200).json(data);
});

// route api from setion 3 file
app.get('/section_3', (req, res) => {
    const data = {
        status: 'success',
        message: 'section  found',
        data: {
            text_header: 'How Trav4college Works',
            text_1:
                ' We will help you map out your goals and aspirations and also help you take conscious steps towards discovering schools that will fit into your objectives and goals. We will be there to help you through the entire process- from helping you make a list of preferred schools, to selecting an exam and putting together your documents for your application.',
            text_2:
                ' Once a suitable school is found, we begin the process of soliciting with our partner schools and then send your applications in. Through the application process, from the point of ‘applied’ till your application status says ‘admitted’, we will stand rigidly behind you and make the necessary preparations for when you get admitted.',
            text_3:
                ' Obtaining your visa and other travel documents may sometimes be challenging, for this reason, we will be handling your visa application process. We will help you secure your travel visa and flexible tickets and also notify the school prior to resumption date so they can prepare towards receiving an international student. Trav4college will help you settle in and even keep in touch with you till your education program is over.'
        }
    };
    res.status(200).json(data);
});

// route api from setion 4 file
app.get('/section_4', (req, res) => {
    const data = {
        status: 'success',
        message: 'section found',
        data: {
            text_header: '700+ College Partners',
            text_1:
                'Trav4College is your window to discovering some of the best colleges and universities around the world and all they have to offer.'
        }
    };
    res.status(200).json(data);
});

// route api from setion 5 file
app.get('/section_4', (req, res) => {
    const data = {
        status: 'success',
        message: 'section found',
        data: {
            text_header: '700+ College Partners',
            text_1:
                'Trav4College is your window to discovering some of the best colleges and universities around the world and all they have to offer.'
        }
    };
    res.status(200).json(data);
});

module.exports = app;
