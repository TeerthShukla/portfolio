package com.example.portfolio;



import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;

@Controller
public class PortController {

    @Autowired
    private ContactRepository contactRepository; // Inject the repository

    @GetMapping("/")
    public String showHomePage(Model model) {
        model.addAttribute("contact", new Contact()); // Pass an empty contact object to the view
        return "index";  // Return the index.html view
    }

    @PostMapping("/submitContact")
    public String handleContactForm(Contact contact, Model model) {
        // Log the contact form submission details to the console
        System.out.println("Contact form submitted: " + contact.getName() + ", " + contact.getEmail() + ", " + contact.getMessage());
        
        // Save contact info to the database
        contactRepository.save(contact);
        
        // Add a success message to the model
        model.addAttribute("successMessage", "Your message has been sent successfully!");
        
        // Return the index.html view
        return "index";
    }

    @GetMapping("/resume")
    public String showResumePage() {
        return "resume";  // Return the resume.html view
    }
}
