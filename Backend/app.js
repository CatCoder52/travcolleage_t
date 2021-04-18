const express = require('express');
const app = express();
const cors = require('cors');

app.use(cors());


// route api from setion 1 file
app.get('/section_1', (req, res) => {
    const data = {
        status: 'success',
        message: 'section 1 found',
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

app.get('/section_3', (req, res) => {});

module.exports = app;
