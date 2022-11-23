//
//  ViewController.swift
//  WeddingApp
//
//  Created by Cora on 21/11/22.
//

import Foundation

import UIKit
class ViewController: UITabBarController, UITabBarControllerDelegate {
    
    override func viewDidLoad() {
        super.viewDidLoad()
        
        //Assign self for delegate for that ViewController can respond to UITabBarControllerDelegate methods
        self.delegate = self
        
        tabBar.backgroundColor = .systemGray3
        tabBar.layer.cornerRadius = 4
        
    }
    
    override func viewWillAppear(_ animated: Bool) {
        super.viewWillAppear(animated)
        
        // Create Tab one
        let tabOne = HomeViewController()
        let tabOneBarItem = UITabBarItem(title: "Home", image: UIImage(named: "home-png"), selectedImage: UIImage(named: "home-png"))
        
        tabOne.tabBarItem = tabOneBarItem
        
        
        // Create Tab two
        let tabTwo = GalleryViewController()
        let tabTwoBarItem2 = UITabBarItem(title: "Galeria", image: UIImage(named: "gallery-png"), selectedImage: UIImage(named: "gallery-png"))
        
        tabTwo.tabBarItem = tabTwoBarItem2
        
        
        self.viewControllers = [tabOne, tabTwo]
    }
    
    // UITabBarControllerDelegate method
    func tabBarController(_ tabBarController: UITabBarController, didSelect viewController: UIViewController) {
        
    }
}
