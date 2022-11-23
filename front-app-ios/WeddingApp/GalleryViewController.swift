//
//  GalleryViewController.swift
//  WeddingApp
//
//  Created by Cora on 21/11/22.
//

import Foundation
import UIKit

class GalleryViewController: UIViewController {
    
    let service = WeddingService()
    
    override func viewDidLoad() {
        view.backgroundColor = .white
        
        service.makeRequest { wedding in
            
            wedding.forEach { wed in
                
                DispatchQueue.main.async {
                    self.imageView.loadFrom(URLAddress: wed.url)
                    
                    print(wed)
                    
                }
            }
        }
        
        loadViews()
    }
    
    private lazy var galleryStackView: UIStackView = {
        let stackView = UIStackView()
        stackView.translatesAutoresizingMaskIntoConstraints = false
        stackView.axis = .vertical
        stackView.spacing = 16
        return stackView
    }()
    
    private lazy var imageView: UIImageView = {
        let image = UIImageView()
        image.translatesAutoresizingMaskIntoConstraints = false
        return image
    }()
    
    private lazy var weddingScrollView: UIScrollView = {
        let scrollView = UIScrollView()
        scrollView.translatesAutoresizingMaskIntoConstraints = false
        
        
        return scrollView
    }()
    
    func loadViews() {
        self.galleryStackView.addArrangedSubview(self.imageView)
        weddingScrollView.addSubview(galleryStackView)
        view.addSubview(weddingScrollView)
        
        NSLayoutConstraint.activate([
            weddingScrollView.topAnchor.constraint(equalTo: view.topAnchor),
            weddingScrollView.leadingAnchor.constraint(equalTo: view.leadingAnchor),
            weddingScrollView.trailingAnchor.constraint(equalTo: view.trailingAnchor),
            weddingScrollView.bottomAnchor.constraint(equalTo: view.bottomAnchor),
            
            galleryStackView.topAnchor.constraint(equalTo: view.topAnchor),
            galleryStackView.leadingAnchor.constraint(equalTo: view.leadingAnchor),
            
            imageView.heightAnchor.constraint(equalToConstant: 400),
            imageView.widthAnchor.constraint(equalTo: view.widthAnchor)
        ])
    }
}

extension UIImageView {
    func loadFrom(URLAddress: String) {
        guard let url = URL(string: URLAddress) else {
            return
        }
        
        DispatchQueue.global().async { [weak self] in
            if let imageData = try? Data(contentsOf: url) {
                self?.updateImage(image: UIImage(data: imageData))
            }
        }
    }
    
    private func updateImage(image: UIImage?) {
        DispatchQueue.main.async {
            self.image = image
        }
    }
}
