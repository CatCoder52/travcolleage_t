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
app.get('/section_5', (req, res) => {
    const data = {
        status: 'success',
        message: 'section found',
        data: {
            text_header: '100+ Highschools trust us',
            text_1:
                'Choosing the right school is key to a student’s success in achieving his/her academic goals. Trav4College, coupled with a trusted network of accredited schools, is set up to help students successfully enroll in schools best suited for them.',
            iamges: [
                'https://trav4college.com/_next/image?url=%2Fassets%2Fimages%2Fhome%2Ftrust-2.jpg&w=640&q=75',
                'https://trav4college.com/_next/image?url=%2Fassets%2Fimages%2Fhome%2Ftrust-2.jpg&w=640&q=75',
                'https://trav4college.com/_next/image?url=%2Fassets%2Fimages%2Fhome%2Ftrust-2.jpg&w=640&q=75'
            ]
        }
    };
    res.status(200).json(data);
});

// route api from setion 6 file
app.get('/section_6', (req, res) => {
    const data = {
        status: 'success',
        message: 'section found',
        data: {
            text_header: 'Trusted by thousands of Aspiring College Students',
            text_1:
                'Watch reviews from out past clients about how Trav4College was able to help them in their study abroad journey.',
            person: [
                {
                    full_name: 'Ibe Andyson',
                    education_level: 'High School Student',
                    text:
                        'Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum fuga animi magnam perspiciatis qui iusto officiis quibusdam! Voluptatibus officiis delectus modi vero. Soluta est, totam impedit deserunt facilis ipsam reiciendis.',
                    rating: '4.5',
                    image: 'https://trav4college.com/assets/images/user-1.png'
                },
                {
                    full_name: 'Joy Ada',
                    education_level: 'High School Student',
                    text:
                        'Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum fuga animi magnam perspiciatis qui iusto officiis quibusdam! Voluptatibus officiis delectus modi vero. Soluta est, totam impedit deserunt facilis ipsam reiciendis.',
                    rating: '3.5',
                    image: 'https://trav4college.com/assets/images/user-3.png'
                },
                {
                    full_name: 'Joel James',
                    education_level: 'High School Student',
                    text:
                        'Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum fuga animi magnam perspiciatis qui iusto officiis quibusdam! Voluptatibus officiis delectus modi vero. Soluta est, totam impedit deserunt facilis ipsam reiciendis.',
                    rating: '3.5',
                    image: 'https://trav4college.com/assets/images/user-2.png'
                }
            ]
        }
    };
    res.status(200).json(data);
});

// route api from setion 8 file
app.get('/section_8', (req, res) => {
    const data = {
        status: 'success',
        message: 'section found',
        data: {
            text_header: 'For Aspiring College Students & Parents Sign up for free today.'
        }
    };
    res.status(200).json(data);
});

module.exports = app;
