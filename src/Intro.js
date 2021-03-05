import { Typography, Divider } from '@material-ui/core'
import meme from './meme.jpeg'
import { Code, dracula } from "react-code-blocks";

export default function Info() {

    return (
        <div style={{padding:2}}>
            <Typography variant="h3">VIM is a Lightweight In-Terminal, Modal, Text Editor</Typography>
            <Divider light />
            <Typography variant="h4">What?</Typography>
            <Typography>
                <b>Lightweight:</b> Doesn't use too many resources <br />
                <b>In-Terminal:</b> Runs in the terminal <br />
                <b>Modal:</b> Uses the idea of modes to provide rich features <br />
                <b>Text Editor:</b> A program that is used to make changes to text* files <br />
            </Typography>
            <Divider light />
            <Typography variant="h4">Why?</Typography>
            Vim solves 2 important problems.
            <Typography variant="h6">Problem 1: You will need Vim</Typography>
            <Typography>
                You are going to encounter Vim as a software developer at some point in your career. 
                The first time you do, it will feel weird. At first it doesn't do what you tell it to.
                You have surely seen all the memes about the "difficulty" of using vim, pointing to the 
                non-intuitive way you quit out of the program. 
            </Typography>
                <img src={meme} alt="meme" />
            <Typography>
                You will sooner or later be forced to interact with a computer with just a terminal and no GUI.
                Making any changes to files will, in most cases offer Vim as the only option. This is a tool
                expected to be used and understood in the industry due to the prevalence of linux as servers.
                This means knowing Vim is essential to succeed as a developer.
            </Typography>
            <Typography variant="h6">Problem 2: The Mouse is Inefficient</Typography>
            <Typography>
                The mouse is an inefficient tools for text editing. It is great when browsing interactive multimedia elements, 
                but when it comes to text editing the keyboard is the better tool. Since your hands are already there so you 
                do not have to be constantly context switching by moving between the mouse and keyboard. Moreover, most of us 
                have developed muscle memory for where the keys on the keyboard are. Vim takes keyboard shortcuts to the next level
                by incentivizing you to always be on the home row.
            </Typography>
            <Typography variant="h6">The Solution</Typography>
            <Typography>
                Vim takes a keyboard-only approach to editing. While it supports the mouse, the interface highly discourages it. 
                Instead Vim treats every key as a shortcut to do something very specific. For example if you wanted to delete the next 
                7 lines, you would press <Code text="d7" />, since every key is a hotkey, you need to change the mode to <Code text="Insert Mode" />in order
                insert some text by pressing <Code text="i" />. Not only that Vim wants you to stay on the home row and not have to move your hand
                off to the arrow keys. Since moving around is the most common operation, the arrow keys are mapped onto the <Code text="h, j, k, l" /> on
                the home row. This means that you can write entire projects never leaving the home row, making the editing process almost a muscle memory.
            </Typography>
            <Divider light />
            <Typography variant="h5">Notes</Typography>
            <Typography>
                * People initially get confused by the term <i>text files</i>. Any file that contains text is a text file, it 
                doesn't need to end in <i>.txt</i>.  
            </Typography>
            

        </div>)
}
