import React, { useEffect, useRef } from "react";
import Mmenu from "mmenu-js";
import "mmenu-js/dist/mmenu.css";
import { Link } from "react-router-dom";
const MobileMenuItem = ({ categories, setShow }) => {
      const menuRef = useRef(null);
      useEffect(() => {
            if (!menuRef.current) {
                  menuRef.current = new Mmenu("#menu", {
                        offCanvas: {
                              use: false,
                        },
                        counters: {
                              add: true,
                        },
                        setSelected: {
                              hover: true,
                        },
                        navbars: [
                              {
                                    position: "top",
                                    use: false,
                                    content: ["searchfield"],
                              },
                        ],
                  });
            }
      }, []);

      return (
            <>
                  {console.log(categories)}
                  <nav id="menu">
                        <ul>
                              {categories.map((cat, index) =>
                                    cat.category?.length > 0 ? (
                                          <li>
                                                <span>{cat.title}</span>
                                                <ul>
                                                      {cat.category.map(
                                                            (sub, index) => (
                                                                  <li
                                                                        key={
                                                                              index
                                                                        }
                                                                  >
                                                                        <Link
                                                                              to={`/category/${sub.slug}`}
                                                                        >
                                                                              {
                                                                                    sub.title
                                                                              }
                                                                        </Link>

                                                                        {sub
                                                                              .subCategory
                                                                              ?.length >
                                                                              0 && (
                                                                              <ul>
                                                                                    {console.log(
                                                                                          categories
                                                                                    )}
                                                                                    {sub?.subCategory?.map(
                                                                                          (
                                                                                                item,
                                                                                                key
                                                                                          ) => (
                                                                                                <li
                                                                                                      key={
                                                                                                            key
                                                                                                      }
                                                                                                >
                                                                                                      <Link
                                                                                                            to={
                                                                                                                  item.slug
                                                                                                            }
                                                                                                            onClick={() =>
                                                                                                                  setShow()
                                                                                                            }
                                                                                                      >
                                                                                                            {
                                                                                                                  item.title
                                                                                                            }
                                                                                                      </Link>
                                                                                                </li>
                                                                                          )
                                                                                    )}
                                                                              </ul>
                                                                        )}
                                                                  </li>
                                                            )
                                                      )}
                                                </ul>
                                          </li>
                                    ) : (
                                          <li key={index}>
                                                <Link
                                                      to={cat.slug}
                                                      onClick={() => setShow()}
                                                >
                                                      {cat.title}
                                                </Link>
                                          </li>
                                    )
                              )}
                        </ul>
                  </nav>
            </>
      );
};

export default MobileMenuItem;
