//
//  ViewController.swift
//  WeddingApp
//
//  Created by Cora on 21/11/22.
//

import Foundation
import UIKit

class HomeViewController: UIViewController {

    override func viewDidLoad() {
        super.viewDidLoad()
        
        view.backgroundColor = .init(hex: "#180947")
        
        setupViews()
    }

    private lazy var titleHome: UILabel = {
        let label = UILabel()
        label.text = "Noivos João e Maria"
        label.textColor = .init(hex: "#FF1493")
        label.numberOfLines = 2
        label.font = .boldSystemFont(ofSize: 40)
        label.translatesAutoresizingMaskIntoConstraints = false
        return label
    }()

    private lazy var subtitleHome: UILabel = {
        let label = UILabel()
        label.text = "Sejam bem vindos amigos "
        label.textColor = .init(hex: "#FFC0CB")
        label.font = .systemFont(ofSize: 20, weight: .semibold)
        label.translatesAutoresizingMaskIntoConstraints = false
        return label
    }()
    
    private lazy var textHome: UILabel = {
        let label = UILabel()
        label.text = "Vejam e compartilhem as fotos tiradas \nno nosso casamento"
        label.numberOfLines = 2
        label.translatesAutoresizingMaskIntoConstraints = false
        label.textColor = .init(hex: "#f6f6f6")
        return label
    }()
    
    private lazy var imageHome: UIImageView = {
        let image = UIImageView()
        image.image = UIImage(named: "wedding-png")
        image.translatesAutoresizingMaskIntoConstraints = false
        return image
    }()
    
    func setupViews() {
        view.addSubview(titleHome)
        view.addSubview(subtitleHome)
        view.addSubview(textHome)
        view.addSubview(imageHome)
        
        NSLayoutConstraint.activate([
            titleHome.topAnchor.constraint(equalTo: view.topAnchor, constant: 120),
            titleHome.centerXAnchor.constraint(equalTo: view.centerXAnchor),
            
            subtitleHome.topAnchor.constraint(equalTo: titleHome.bottomAnchor, constant: 24),
            subtitleHome.centerXAnchor.constraint(equalTo: view.centerXAnchor),
            
            textHome.topAnchor.constraint(equalTo: subtitleHome.bottomAnchor, constant: 18),
            textHome.centerXAnchor.constraint(equalTo: view.centerXAnchor),
            
            imageHome.bottomAnchor.constraint(equalTo: view.bottomAnchor, constant: -12),
            imageHome.centerXAnchor.constraint(equalTo: view.centerXAnchor),
            imageHome.heightAnchor.constraint(equalToConstant: 500),
            imageHome.widthAnchor.constraint(equalToConstant: 400)
        ])
    }
}

