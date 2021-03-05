import { Typography, Divider } from '@material-ui/core'
import { Code, dracula } from "react-code-blocks";

import vim1 from './vim1.png'; 
export default function Start() {

    return (
        <div style={{padding:2}}>
            <Typography variant="h3">Getting Started</Typography>
            <Typography variant="h4">The First Step</Typography>
            <Typography>
                Simply start by opening a file by running this command:
            </Typography>
            <Code text="vim file.txt" language="bash" theme={dracula} />
            <Typography>
                Which should give you a screen somewhat like this:
            </Typography>
            <img src={vim1} alt="new vim screen" width="100%"/>
            <Typography>
                Pressing the <Code text="i" /> key will put you into insert mode where you can start typing away. 

                You will see a little <Code text="--insert--" /> at the bottom left to indicate you are now in insert mode. 

                Hit <Code text="esc" /> in order to go back to normal mode to play around with the keyboard shortcuts. 

                You can find what each key does by looking at the Cheat Sheet tab. 

                VIM also comes with its own helpful cheat sheet and can be accessed by pressing <Code text=":h <key>" /> to see what that key does and its different modifiers.
            </Typography>
            <Divider light />
            <Typography variant="h4">Resources</Typography>
            <Typography>
                Due to its ubiquity, VIM has a huge library of learning resources. From oinline tutorials to games. Here are a few of my favourite resources for someone getting started. 
            </Typography>
            <Typography variant="h6">VimTutor</Typography>
            <Typography>
                VimTutor is a great tool that comes with most installations of vim. just by typing in <Code text="vimtutor" /> on the terminal, 
                you will be greeted to vim screen with a full tutorial that walks through all you need to know to get proficiesnt at vim. Starting with navigating
                the application and moving onto the myriad of features it offers.
            </Typography>
            <Typography variant="h6">VimTutor</Typography>
            <Typography>
                VimTutor is a great tool that comes with most installations of vim. just by typing in <Code text="vimtutor" /> on the terminal, 
                you will be greeted to vim screen with a full tutorial that walks through all you need to know to get proficient at vim. Starting with navigating
                the application and moving onto the myriad of features it offers.
            </Typography>
            <Typography variant="h6">Vim Adventures</Typography>
            <Typography>
                <a href="https://vim-adventures.com">Vim adventures</a> is a really fun tool It as a short puzzle game that helps master the program. It is also really 
                helpful to build muscle memory as it forces the user to the program. I could never touch type until games like these basically taught me to. I would highly
                recommend checking it out!
            </Typography>
            <Typography variant="h6">Open Vim</Typography>
            <Typography>
                <a href="https://openvim.com">Open Vim</a> is a more guided tutorial and can be pretty helpful when first starting to learn the featureset. This is another great tool
                it introduces you to some more advanced features like macros that you would not usually use in other editors. 
            </Typography>
            <Divider light />
            <Typography variant="h4">What's next</Typography>
            <Typography>
                Once you have the basics dont be afraid to start using vim everyday! The best way to improve is to dive right in. Once there you will know what to do.
                Vim has a great community sorrounding it so dont be afraid to ask! The wiki has a lot of documentation for spesific settings and feratures. 
                Vim is organic and its featres will grow as you grow more accustomed to the new way of thinking!
            </Typography>
        </div>)
}
