import React, { Component } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { getMovies } from '../../actions'
import '../../assets/Style/list.css'

  
  

class Movie extends Component {
    componentDidMount() {
        this.props.getMovies()
    }
    imgFilter=val=> {
        return val.replace('w.h','128.180')
      }

    renderItem = () => {
        if (this.props.movies) {
            return this.props.movies.map(item => <div class="item" data-id="342773" data-bid="dp_wx_home_movie_list" key={item.id}>
                <div class="main-block">
                    <div class="avatar" sort-flag="">
                        <div class="default-img-bg">
                            <img src={this.imgFilter(item.img)} onerror="this.style.visibility='hidden'" alt=''></img>
                        </div>
                    </div>
                    <div class="mb-outline-b content-wrapper">
                        <div class="column content">
                            <div class="box-flex movie-title">
                                <div class="title line-ellipsis v2dimax_title">{item.nm}</div>
                                <span class="version v2d imax"></span>
                            </div>
                            <div class="detail column">
                                <div class="no-score">暂无评分</div>
                                <div class="actor line-ellipsis">主演: {item.star}</div>
                                <div class="show-info line-ellipsis">{item.showInfo}</div>
                            </div>
                        </div>
                        <div class="button-block" data-id="342773">
                            <div class="btn normal"><span class="fix" data-bid="dp_wx_home_movie_btn">购票</span></div>
                        </div>
                    </div>
                </div>
            </div>)
        }
    }
    render() {
        console.log(this.props.movies)
        return (
            <div class="tab-content">
                <div class="page n-hot active" data-hot=".n-hot" data-cid="c_dmLad">
                    <div class="list-wrap">
                        {this.renderItem()}

                    </div>
                </div>
            </div>

        )
    }
}
export default connect(
    state => { return { movies: state.getIn(['movieReducer', 'movies']) } },
    dispatch => bindActionCreators({ getMovies }, dispatch)
)(Movie)